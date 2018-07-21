import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import RouterView from "@/router/router.jsx";
import { routes } from "@/router/config.jsx";
import { Menu, Icon, Button, Popover } from 'antd';
import { getCookie, setCookie, delCookie } from "@/utils/cookie.js";
import "./homes.css"

const SubMenu = Menu.SubMenu;
const meail = (
  <div>
    <p>如有问题,请邮箱至</p>
    <p>Content</p>
  </div>
);
const money = (
  <div>
    <div>
      <p>现金余额</p>
      <p>$126,560.00</p>
    </div>
    <div>
      <p>今日消耗</p>
      <p>5,600</p>
    </div>
  </div>
);
const user = (
<div>
  <Button onClick={()=>{SignOut()}}>退出登陆</Button>
</div>
);
const SignOut=()=>{
  localStorage.removeItem("username");
  delCookie("token");
  window.location.reload();
}
class Homes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }
  render() {
    return (
      <div className="warp">
        <Fragment>
          <div className="box">
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="11">
                <Icon type="inbox" />
                <span><NavLink to="/index/NewlyBuild">新建广告</NavLink></span>
              </Menu.Item>
              <Menu.Item key="12">
                <Icon type="inbox" />
                <span><NavLink to="/index/HomePage">首页概览</NavLink></span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" />广告管理</span>}>
                <Menu.Item key="5"><NavLink to="/index/Plan">广告计划</NavLink></Menu.Item>
                <Menu.Item key="6"><NavLink to="/index/Unit">广告单元</NavLink></Menu.Item>
                <Menu.Item key="7"><NavLink to="/index/Originality">广告创意</NavLink></Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
                <Icon type="inbox" />
                <span><NavLink to="/index/DataCenter">数据中心</NavLink></span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="inbox" />
                <span><NavLink to="/index/ToolChest">工具箱</NavLink></span>
              </Menu.Item>
            </Menu>
          </div>
          <div className="router">
            <header>
              <Popover content={user}>
                <Button type="primary">欢迎:  {localStorage.getItem("username")}</Button>
              </Popover>
              <Popover content={money}>
                <Button type="primary"><Icon type="pay-circle" /></Button>
              </Popover>
              <Popover content={meail}>
                <Button type="primary"><Icon type="exclamation-circle-o" /></Button>
              </Popover>
            </header>
            <RouterView routes={this.props.routes}></RouterView>
          </div>
        </Fragment>

      </div>
    );
  }
  toggleCollapsed() {
    // this.setState({
    //   collapsed: !this.state.collapsed,
    // });
  }
}

export default Homes;