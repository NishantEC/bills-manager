import { configureStore } from "@reduxjs/toolkit";
import billsReducer from "./reducers/billSlice"
import modalReducer from "./reducers/modalSlice"
import chartDataReducer from "./reducers/chartDataSlice"


export const store = configureStore({
    reducer:{
        bills:billsReducer,
        modal:modalReducer,
        chartData:chartDataReducer,
    },
})