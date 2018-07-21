import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from "react-router-dom";
import http from "@/utils/http.js";
import { Table } from 'antd';
import { connect } from "react-redux";

class Plan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            list: [],
            data: []

        };
        this.onSelectChange = this.onSelectChange.bind(this)
    }
    onSelectChange(selectedRowKeys) {
        this.setState({ selectedRowKeys });
    }

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        //  rowSelection={rowSelection}
       // console.log(this.state)
        return (
            <Table columns={this.props.columns} dataSource={this.props.list} />
        );
    }
    componentWillMount() {
        let { dispatch } = this.props;
        http.post("/dsp-advert/campaigns/list").then(res => {
            // this.setState({
            //     list: JSON.parse(res.list),
            //     data: res.columns,
            // })
           dispatch({
                type: "LIST",
                data: res.list
            })
            dispatch({
                type:"COLUMNS",
                data:res.columns
            })
        })
    }
}
export default  connect(state=>({
    list:state.list,
    columns:state.columns
}))(Plan);