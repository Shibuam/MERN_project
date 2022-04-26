import { createStore, applyMiddleware, compose } from "redux";
import { reducer } from "./Reducers/Index";
const initialValue={

}
const store = createStore(
    reducer,
    initialValue,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;