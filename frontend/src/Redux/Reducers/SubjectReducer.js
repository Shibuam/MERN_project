import { SET_LOCATION_REQUEST, SET_LOCATION_SUCCESS, SET_LOCATION_ERR, SET_SUBJECT, SET_ATTEND_CLASS_SUCCESS,SET_COURSE_TYPE_SUCCESS,SET_TRAINING_TYPE_SUCCESS,SET_STUDENT_DETAILS_SUCCESS,SET_CLASS_TYPE_SUCCESS,SET_COURSES_TYPE_SUCCESS,SET_TOKEN_TYPE_SUCCESS,SET_TOKEN_TYPE_REQUEST,SET_TOKEN_TYPE_FAIL,USER_LOGOUT } from "../Constants/SubjectActions";

export const setSubjectReducer = (state = null, { type, payload }) => {
    switch (type) {
        case SET_SUBJECT:
            return payload
        default:
            return state
    }
}

export const setLocationReducer = (state = null, action) => {
    try {

        switch (action.type) {
            case SET_LOCATION_REQUEST:
                return {
                    loading: true
                }
            case SET_LOCATION_SUCCESS:
                return {
                    loading: false,
                    payload: action.payload
                }
            case SET_LOCATION_ERR:
                return {
                    loading: false,
                    err: action.payload
                }
            default:
                return state
        }

    } catch (err) {
        console.log(err, "errrrr");


    }
}
export const setAttendClassType = (state = {}, action) => {
   
    try {
        switch (action.type) {
            case SET_ATTEND_CLASS_SUCCESS:
                return {
                    loading: false,
                    payload: action.payload
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}
export const setCourseType = (state = {}, action) => {
 
    try {
        switch (action.type) {
            case SET_COURSE_TYPE_SUCCESS:
                return {
                    loading: false,
                    payload: action.payload
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}
export const setTrainingType = (state = {}, action) => {
 
    try {
        switch (action.type) {
            case SET_TRAINING_TYPE_SUCCESS:
                return {
                    loading: false,
                    payload: action.payload
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}
export const setStudentDetails = (state = {}, action) => {
 
    try {
        switch (action.type) {
            case SET_STUDENT_DETAILS_SUCCESS:
                return {
                    loading: false,
                    payload: action.payload,
                    status:"student"
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}

export const setClassTypeTeacher = (state = {classTypeTeacher:{}}, action) => {
 
    try {
        switch (action.type) {
            case SET_CLASS_TYPE_SUCCESS:
                return {
                  
                    ...state,classTypeTeacher: action.payload,
                 
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}

export const setCourseTypeTeacher = (state = {classTypeTeacher:{}}, action) => {
 
    try {
        switch (action.type) {
            case SET_COURSES_TYPE_SUCCESS:
                return {
                  
                    ...state,classTypeTeacher: action.payload,
                 
                }
            default:
                return state
        }
    }
    catch (err) {
        console.log(err, "errrrr");

    }
}

export const useTokenReducer = (state = {}, action) => {
    console.log(action,"action..........")
    switch (action.type) {
    //   case SET_TOKEN_TYPE_REQUEST:
    //     return { loading: true }
      case SET_TOKEN_TYPE_SUCCESS:
        return { loading: false,genaratedToken: action.payload }
    //   case SET_TOKEN_TYPE_FAIL:
    //     return { loading: false, error: action.payload }
    //   case USER_LOGOUT:
    //     return {}
      default:
        return state
    }
  }

