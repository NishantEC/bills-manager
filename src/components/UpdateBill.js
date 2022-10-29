import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { updateBill } from '../reducers/billSlice'
import { closeModal } from '../reducers/modalSlice'


const UpdateBill = () => {
  const id = useSelector((store) =>(store.modal.selectedId))
  const dispatch = useDispatch()
  const bill = useSelector(
    (store) =>
      store.bills.bills.find((bill) => {
        return bill.id === id
      }),
    shallowEqual,
  )
console.log(bill)
  const [NewBill, setNewBill] = useState(bill)

  function onChangeHandler(e) {
    console.log(NewBill)
    let { name, value } = e.target
    setNewBill({ ...NewBill, [name]: value })
  }
  const updateHandler = () => {
    if (
      (NewBill.description !== '') &
      (NewBill.amount !== '') &
      (NewBill.date !== '') &
      (NewBill.amount !== '')
    ) {
      dispatch(updateBill(NewBill))
      dispatch(closeModal())
    }
  }

  return (
    <aside className='modal-container'>


    <div className="craeteupdatebill modal">
      <h2>Update Bill</h2>

        <div>
          <input
            type="text"
            name="description"
            value={NewBill.description}
            onChange={(e) => onChangeHandler(e)}
            />
          <p>Description</p>
        </div>
        <div>

        <input type="date"  name="date"
            value={NewBill.date}
            onChange={(e) => onChangeHandler(e)}/>
          <p>Date</p>
        </div>


        <div>
          <input
            type="text"
            name="amount"
            value={NewBill.amount}
            onChange={(e) => onChangeHandler(e)}
            />
          <p>amount</p>
        </div>
        <div>
          <p>category</p>{' '}
          <select
            name="category"
            value={NewBill.category}
            onChange={(e) => onChangeHandler(e)}
            >
            <option value="" disabled>
              Select Category
            </option>
            <option value="FoodNDining">FoodNDining</option>
            <option value="utility">utility</option>
            <option value="shopping">shopping</option>
            <option value="household">household</option>
            <option value="education">education</option>
            <option value="Personal Care">Personal Care</option>
          </select>
        </div>

        <div
          className="btn"
          onClick={() => {
            updateHandler()
          }}
          >
          Update
        </div>

        <div
          className="btn"
          onClick={() => {
            dispatch(closeModal())
          }}
          >
          Cancel
        </div>

    </div>

      </aside>
  )
}

export default UpdateBill
