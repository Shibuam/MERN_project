import { combineReducers } from "redux";
import { setLocationReducer, setSubjectReducer } from "./SubjectReducer";

export const reducer = combineReducers({
    subject: setSubjectReducer,
    location:setLocationReducer
})