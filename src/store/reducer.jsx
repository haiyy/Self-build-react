import { combineReducers } from "redux";

const list = function (state=[], action) {
    if (action.type == "LIST") {
        let data = JSON.parse(action.data);
        return data;
    }else{
        return state
    }
}
const columns=function(state=[],action){
     if(action.type == "COLUMNS"){
        let data = action.data;
        return data;
    }else{
        return state
    }
}

const store = combineReducers({ columns,list });
export default store;