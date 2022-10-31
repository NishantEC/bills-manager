import { createSlice } from '@reduxjs/toolkit'

const billsFetched = localStorage.getItem('bills') !== null? JSON.parse(localStorage.getItem('bills')):[]
const lastBillIdFetched = localStorage.getItem('lastBillId') !== null? JSON.parse(localStorage.getItem('lastBillId')):[]

const initialState = {
  bills: billsFetched,
  lastBillId: lastBillIdFetched,
}

const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    createBill: (state, { payload }) => {

      state.lastBillId += 1
      state.bills.push({id:state.lastBillId, ...payload});
      localStorage.setItem('bills',JSON.stringify(state.bills))
      localStorage.setItem('lastBillId',JSON.stringify(state.lastBillId))
    },
    deleteBill: (state, { payload }) => {
      state.bills = state.bills.filter((bill) => bill.id !== payload)
      localStorage.setItem('bills',JSON.stringify(state.bills))
      localStorage.setItem('lastBillId',JSON.stringify(state.lastBillId))

    },
    updateBill:(state, { payload })=>{

      state.bills = state.bills.map((bill) => {
        if(bill.id === payload.id){
          return {...payload}
        }
        return bill
      })
      localStorage.setItem('bills',JSON.stringify(state.bills))
      localStorage.setItem('lastBillId',JSON.stringify(state.lastBillId))
    },
  },
})
export const { createBill, deleteBill,updateBill } = billSlice.actions
export default billSlice.reducer
