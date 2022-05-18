import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";


const reducer=combineReducers({
    expenses:expenseReducer
})
const initialstate={}
const store=createStore(reducer,initialstate)

export default store