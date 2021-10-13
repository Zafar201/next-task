import { combineReducers } from "redux";
import { getNameReducer, postReducer } from "./postReducer";

export default combineReducers({
    post:postReducer,
    name:getNameReducer

})