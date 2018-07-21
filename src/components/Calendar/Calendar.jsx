import React, { Component } from 'react'
import { DatePicker } from 'antd';
import "./Calendar.css"
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Calendar extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.onChange = this.onChange.bind(this)
    }
    render() {
        return (
            <div>
                <RangePicker onChange={this.onChange}  format={'YYYY/MM/DD'}/>
            </div>
        )
    }
    onChange(data, dataString) {
        this.props.Change(data, dataString)
        // console.log(data, dataString);
    }
}
export default Calendar