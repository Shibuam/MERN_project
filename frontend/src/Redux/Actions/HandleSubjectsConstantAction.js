import { SET_SUBJECT, SET_LOCATION_SUCCESS,SET_ATTEND_CLASS_SUCCESS,SET_COURSE_TYPE_SUCCESS,SET_TRAINING_TYPE_SUCCESS,SET_STUDENT_DETAILS_SUCCESS,SET_CLASS_TYPE_SUCCESS,SET_COURSES_TYPE_SUCCESS,SET_TOKEN_TYPE_SUCCESS,SET_DATE_SUCCESS } from "../Constants/SubjectActions"
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

export const setAttendClassType=(attendType)=>{
    return{
        type:SET_ATTEND_CLASS_SUCCESS,
        payload:attendType
    }
}
export const setCourseType=(courseType)=>{
    return{
        type:SET_COURSE_TYPE_SUCCESS,
        payload:courseType
    }
}
export const setTrainingType=(trainingType)=>{
    return{
        type:SET_TRAINING_TYPE_SUCCESS,
        payload:trainingType
    }
}

export const studentDetails=(details)=>{
    console.log(details)
    return{
        type:SET_STUDENT_DETAILS_SUCCESS,
        payload:details
    }
}
export const setClassTypeTeacher=(classes)=>{
   
    return{
        type:SET_CLASS_TYPE_SUCCESS,
        payload:classes
    }
}
export const setTeacherCourses=(courses)=>{
  
    return{
        type:SET_COURSES_TYPE_SUCCESS,
        payload:courses
    }
}

export const setToken=(tokenNumber)=>{
      return{
          type:SET_TOKEN_TYPE_SUCCESS,
          payload:tokenNumber
      }
      localStorage.setItem("userToken",JSON.stringify(tokenNumber))
}
export const setDate=(bookedDate)=>{
    return{
        type:SET_DATE_SUCCESS,
        payload:bookedDate
    }

}

