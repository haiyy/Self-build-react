import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { getCookie, setCookie } from "@/utils/cookie.js";
console.log(getCookie());
// function getCookie() {
//     return true
// }
class RouterView extends Component {

    render() {
        let { routes } = this.props;
        //console.log(routes)
        if (routes) {
            return (
                <Switch>
                    {
                        routes.map((route, index) => {
                            return <Route
                                exact={route.exact || false}
                                path={route.path}
                                key={index}
                                render={(history) => {
                                    if (route.path == "/login" || getCookie("token")) {
                                        return <route.component routes={route.children} {...history}></route.component>
                                    } else {
                                        return <Redirect to={{ pathname: '/login', state: { from: route.path } }}></Redirect>
                                    }

                                }}
                            ></Route>
                        })
                    }
                    {/*<Route path="/index" render={() => {
                        return <Redirect to="/index/HomePage" from="/index"></Redirect>
                    }}></Route>*/}
                    <Redirect to="/index/HomePage" from="/index"></Redirect>
                </Switch>
            )
        }
    }
}
export default RouterView