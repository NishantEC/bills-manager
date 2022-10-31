import { createSlice } from "@reduxjs/toolkit";



const initialState ={
        chartData :{January: 0,
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
        December: 0,}
      }





const chartDataSlice = createSlice({
    name: 'chartData',
    initialState,
    reducers: {
    updateChartData: (state, { payload }) => {
    let rawData = {
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

    payload.map((bill) =>{
        const months = Object.keys(rawData)
        const date = new Date(bill.date)
        const month = months[date.getMonth()]
        const newAmount = rawData[month] + parseFloat(bill.amount)
        rawData[month] = newAmount
        return null
    })
    state.chartData = rawData
    console.log(state.chartData)
    },
    },

})

export const {updateChartData} = chartDataSlice.actions
export default chartDataSlice.reducer