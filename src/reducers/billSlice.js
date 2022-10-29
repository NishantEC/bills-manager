import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bills: [
    {
      id: 1,
      description: 'Dominos',
      category: 'FoodNDining',
      amount: '4300',
      date: '2022-10-25'
    },
    {
      id: 2,
      description: 'Car wash',
      category: 'utility',
      amount: '500',
      date: '2022-10-11'
    },
    {
      id: 3,
      description: 'Amazon',
      category: 'shopping',
      amount: '2030',
      date: '2022-10-11'
    },
    {
      id: 4,
      description: 'House rent',
      category: 'household',
      amount: '35900',
      date: '2023-03-20'
    },
    {
      id: 5,
      description: 'Tuition',
      category: 'education',
      amount: '2200',
      date: '2023-04-16'
    },
    {
      id: 7,
      description: 'Vacation',
      category: 'Travel',
      amount: '3430',
      date: '2022-04-25'
    }
  ],
  lastBillId: 7,
}

const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    createBill: (state, { payload }) => {

      state.lastBillNo += 1
      state.bills.push({id:state.lastBillId, ...payload})
    },
    deleteBill: (state, { payload }) => {
      state.bills = state.bills.filter((bill) => bill.id !== payload)
    },
    updateBill:(state, { payload })=>{
      console.log(payload)
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
