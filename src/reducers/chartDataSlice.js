import { createSlice } from "@reduxjs/toolkit";



const initialState ={
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0,
      }



const chartDataSlice = createSlice({
    name: 'chartData',
    initialState,
    reducers: {
    updateChartData: (state, { payload }) => {
        console.log(payload);
    const months = Object.keys(state)
    const date = new Date(payload.date)
    const month = months[date.getMonth()]
    const newAmount = state[month] + parseFloat(payload.amount)
    const prevDataset = state
    prevDataset[month] = newAmount
    state = prevDataset
    },
    },

})

export const {updateChartData} = chartDataSlice.actions
export default chartDataSlice.reducer