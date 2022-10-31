import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  bills: [
  ],
  lastBillId: 0,
}

const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    createBill: (state, { payload }) => {

      state.lastBillId += 1
      state.bills.push({id:state.lastBillId, ...payload})
    },
    deleteBill: (state, { payload }) => {
      state.bills = state.bills.filter((bill) => bill.id !== payload)
    },
    updateBill:(state, { payload })=>{

      state.bills = state.bills.map((bill) => {
        if(bill.id === payload.id){
          return {...payload}
        }
        return bill
      })
    },
  },
})
export const { createBill, deleteBill,updateBill } = billSlice.actions
export default billSlice.reducer
