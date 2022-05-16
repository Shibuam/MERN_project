import { combineReducers } from "redux";
import { setLocationReducer, setSubjectReducer,setAttendClassType,setCourseType,setTrainingType,setStudentDetails,setClassTypeTeacher,useTokenReducer } from "./SubjectReducer";

export const reducer = combineReducers({
    subject: setSubjectReducer,
    location:setLocationReducer,
    classType:setAttendClassType,
    courseType:setCourseType,
    trainingType:setTrainingType,
    studentDetails:setStudentDetails,
    classTypeTeacher:setClassTypeTeacher,
    genaratedToken:useTokenReducer

})