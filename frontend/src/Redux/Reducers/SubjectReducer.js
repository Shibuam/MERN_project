import { SET_LOCATION_REQUEST, SET_LOCATION_SUCCESS, SET_LOCATION_ERR, SET_SUBJECT } from "../Constants/SubjectActions";

export const setSubjectReducer = (state = null , {type, payload}) => {
    switch(type){
        case SET_SUBJECT:
            return payload
        default:
            return state
    }
}

export const setLocationReducer = (state=null,action)=>{
    try{

        switch(action.type){
            case SET_LOCATION_REQUEST :
                return{
                    loading:true
                }
            case SET_LOCATION_SUCCESS:
                return{
                    loading:false,
                    payload:action.payload
                }
                case SET_LOCATION_ERR:
                    return{
                        loading:false,
                        err:action.payload
                    }
                    default:
                        return state
                }
    }catch(err){
       console.log(err,"errrrr");
    
            
    }
}

