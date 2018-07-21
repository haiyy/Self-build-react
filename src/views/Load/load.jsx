import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import http from "@/utils/http.js";
import { getCookie, setCookie } from "@/utils/cookie.js";
import NormalLoginForm from "@/components/Login/login.jsx";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./load.css";
const FormItem = Form.Item;
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class load extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     username: '',
        //     password: ''
        // }
        // this.change = this.change.bind(this);
    }
    render() {
        return (
            <div className="login">
                <header><h4>作业帮.智能营销平台</h4></header>
                <div className="Loadtop">
                    <div className="images">
                        <img src="static/images/logo.png" />
                    </div>
                    <div>
                        <h1>智能营销平台</h1>
                        <h4>网络新生态  智能助力广告营销</h4>
                    </div>
                </div>
                <div className="formBox">
                    <h3>用户登录</h3>
                    <WrappedNormalLoginForm history = {this.props.history}/>
                </div>
                {/*<div className="form">
                    <h3>用户登录</h3>
                    <div>
                        <input type="text" value={this.state.username} name="username" onChange={this.change} placeholder="用户名" />
                    </div>
                    <div>
                        <input type="text" value={this.state.password} name="password" onChange={this.change} placeholder="密码" />
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" />
                    </div>
                    <div>
                        <button onClick={()=>{this.login()}}>登陆</button>
                    </div>
                    <div>
                        <button>忘记密码</button>
                    </div>
                </div>*/}
            </div>
        )
    }
    // change(e) {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    // login() {
    //     http.post("/dsp-admin/user/login", {
    //         username: this.state.username,
    //         password: this.state.password,
    //         getCookie: 'token'
    //     }).then(res => {
    //         if (res.success === 0) {
    //             console.log(res.user.name)
    //             localStorage.setItem("username", res.user.name);
    //             this.props.history.push("/index")
    //         }
    //     })
    // }
}
export default load;