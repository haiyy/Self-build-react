import { createStore } from "redux";
import reducer from "./reducer.jsx";

let store = createStore(reducer);

export default store;