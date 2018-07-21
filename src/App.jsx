import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import RouterView from "@/router/router.jsx";
import { routes } from "@/router/config.jsx";
import { Menu, Icon, Button } from 'antd';

const SubMenu = Menu.SubMenu;

class App extends Component {
    render(){
      return (
          <BrowserRouter>
              <RouterView routes={routes}></RouterView>
          </BrowserRouter>
      )
    }
}

export default App;