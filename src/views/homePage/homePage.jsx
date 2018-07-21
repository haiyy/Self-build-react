import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import http from "@/utils/http.js";
import Calendar from "@/components/Calendar/Calendar.jsx";
import { Icon, Card, Popover, Button, Menu } from "antd";
const dateFormat = 'YYYY/MM/DD';
import "./homePage.css";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "Amount",
            over: "",
            Add: true
        };
        this.echartInstance = '';
        this.option = {
            xAxis: {
                type: 'category',
                data: [],
                boundaryGap: false
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [],
                type: 'line'
            }]
        }
        this.active = this.active.bind(this);
        this.AddClass = this.AddClass.bind(this);
        this.change = this.change.bind(this);
        this.setOption = this.setOption.bind(this);
    }
    render() {
        let { Add } = this.state;
        return (
            <div className="home">
                <div className="top">
                    <Card>
                        <p>现金账户</p>
                        <p>$126,560.00</p>
                    </Card>
                    <Card>
                        <p>今日消耗</p>
                        <p>$5,400</p>
                    </Card>
                    <span></span>
                </div>
                <section>
                    <div className="topBox">
                        <b>整体情况</b>
                        <div className="Calendar">
                            <span onClick={this.AddClass} className={Add ? "active" : ""}>近7天</span>
                            <span onClick={this.AddClass} className={!Add ? "active" : ""}>近3天</span>
                            <Calendar style={{ width: 200 }} Change={this.change}></Calendar>
                        </div>
                    </div>
                    <div className="car">
                        <Card>
                            <p>曝光量(次)</p>
                            <p><b>278,456</b></p>
                        </Card>
                        <Card>
                            <p>点击量(次)</p>
                            <p><b>278,456</b></p>
                        </Card>
                        <Card>
                            <p>点击量(次)</p>
                            <p><b>278,456</b></p>
                        </Card>
                        <Card>
                            <p>点击量(次)</p>
                            <p><b>278,456</b></p>
                        </Card>
                    </div>
                    <div className="graph" ref="graph"></div>
                </section>
            </div>
        )
    }
    MouseOver(msg) {
        console.log(msg)
        this.setState({
            over: msg
        })
        alert(msg)
    }
    change(date, dateString) {
         this.setOption(dateString);
    }
    active(msg) {
    }
    componentDidMount() {
        this.echartInstance = echarts.init(this.refs.graph);
        // this.setOption([moment().subtract(7, 'days').format(dateFormat), moment().format(dateFormat)]);
        // window.onresize=()=>{
        //     this.echartInstance.resize()
        // }
        let option = this.option;
        http.post('/dsp-report/index', { count: 7 }).then(res => {
            option.series[0].data = res.data.dataY1;
            this.option.xAxis.data = res.data.dataY2;
            this.echartInstance.setOption(option);
        });
    }
    setOption(dateString){
        let option = this.option;
        let a = moment(dateString[0]);//起始时间
        let b = moment(dateString[1]);//结束时间
        let days = b.diff(a,'days'); //天数
        let arrTime=[];
        for(let i=0; i<=days;i++){
            //console.log(moment(dateString[1]).subtract(i, 'days'));每天日期
            arrTime.unshift(moment(dateString[1]).subtract(i, 'days').format(dateFormat))
        }
        this.option.xAxis.data=arrTime
        http.post('/dsp-report/index', { count: days+1 }).then(res => {
            option.series[0].data = res.data.dataY1
            this.echartInstance.setOption(option)
        });
    }
    AddClass() {
        this.setState({
            Add: !this.state.Add
        })
    }
}
export default HomePage;