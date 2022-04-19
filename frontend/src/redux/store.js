import {createStore} from 'redux'

const initialState={
    value:0
};

function AppReducer(prevState=initialState,action){
  
    return (
        <div>
            this is store page
        </div>
    )
}
const Store=createStore(AppReducer)
export default Store