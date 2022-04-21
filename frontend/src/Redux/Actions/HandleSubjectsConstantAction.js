import { SET_SUBJECT, SET_LOCATION_SUCCESS } from "../Constants/SubjectActions"
export const setSubjects = (subject) => {
    return {
        type: SET_SUBJECT,
        payload: subject
    }
} 

export const setLocation = (location)=>{
    return{
        type:SET_LOCATION_SUCCESS,
        payload:location
    }

}