import React, { Component, Fragment } from "react";
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import { Route, NavLink } from "react-router-dom";
import { getCookie, setCookie } from "@/utils/cookie.js";
import http from "@/utils/http.js";
import "./login.css";

const FormItem = Form.Item;

class NormalLoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                //console.log(this.props.history);
                http.post("/dsp-admin/user/login", {
                    username: values.userName,
                    password: values.password
                }).then(res => {
                    if (res.success === 0) {
                        setCookie("token",res.token)
                        localStorage.setItem("username", res.user.name);
                        this.props.history.push("/index")
                    } else {
                        this.setState({
                            visible: true,
                        });
                        return false;
                    }
                })
            }
        });
    }
    showModal() {
        this.setState({
            visible: true,
        });
    }

    handleOk(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel(e) {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Fragment>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" >
                            Log in
                    </Button>
                        Or <a href="">register now!</a>
                    </FormItem>
                </Form>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>用户名或密码不正确</p>
                </Modal>
            </Fragment>
        );
    }
}
export default NormalLoginForm;