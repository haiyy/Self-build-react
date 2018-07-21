import React, { Component } from 'react'
import HomePage from "@/views/homePage/homePage.jsx"
import Plan from "@/views/Plan/plan.jsx";
import loadable from "react-loadable";
import High from "@/router/loadable.jsx";
import { Redirect } from "react-router-dom"
import Home from "@/views/homes.jsx";
import Load from "@/views/Load/load.jsx";
let router = {
    routes: [
        {
            path: "/",
            exact: true,
            component: () => { return <Redirect to="/login"></Redirect> }
        },{
            path:"/login",
            component:Load,
            exact:true
        }, {
            path: "/index",
            component: Home,
            children: [{
                path: "/index/NewlyBuild",
                component: High('newlyBuild/newlyBuild'),
                //exact: true
            }, {
                path: "/index/HomePage",
                component: High('homePage/homePage')
                //component:HomePage
            }, {
                path: '/index/Plan',
                component: High('plan/plan')
                //component:Plan
            }, {
                path: '/index/Unit',
                component: High('unit/unit')
            }, {
                path: '/index/Originality',
                component: High('originality/originality')
            }, {
                path: "/index/DataCenter",
                component: High('dataCenter/dataCenter')
            }, {
                path: "/index/ToolChest",
                component: High('toolChest/toolChest')
            }]
        }]
}
let { routes } = router
export { routes }
export default router

