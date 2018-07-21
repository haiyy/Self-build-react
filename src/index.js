import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider, DatePicker, message } from 'antd';
import { Provider } from "react-redux";
import store from "./store"
import thunk from "redux-thunk";
import reducers from "./store/index.js";
import App from './App.jsx';
import 'antd/dist/antd.css';
import './index.css';

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
