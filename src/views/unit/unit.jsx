import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import Calendar from "@/components/Calendar/Calendar.jsx";
import "./unit.css"
class Unit extends Component{
    render(){
         return (
             <div>
                 <div className="inp">
                     <Calendar></Calendar>
                 </div>
             </div>
         )
    }
}
export default Unit;