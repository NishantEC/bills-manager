import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createBill } from '../reducers/billSlice'

const CreateBill = () => {
  const dispatch = useDispatch()
  const [NewBill, setNewBill] = useState({
    description: '',
    date: '',
    amount: 0,
    category: '',
  })

  function onChangeHandler(e) {
    let { name, value } = e.target
    setNewBill({ ...NewBill, [name]: value })
  }
  const saveHandler = () => {
    if (
      (NewBill.description !== '') &
      (NewBill.amount !== '') &
      (NewBill.date !== 0) &
      (NewBill.amount !== '') &
      (NewBill.category !== '')
    ) {
      dispatch(createBill(NewBill))
      clearForm()
    }
  }

  const clearForm = () => {
    setNewBill({
      description: '',
      date: '',
      amount: 0,
      category: '',
    })
  }
  return (
    <div className="craeteupdatebill">
      <h2>Create Bill</h2>

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
        <input
          type="date"
          name="date"
          value={NewBill.date}
          onChange={(e) => onChangeHandler(e)}
        />
        <p>Date</p>
      </div>
      <div>
        <input
          type="number"
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
      <div className="btns">
        <div
          className="btn"
          onClick={() => {
            saveHandler()
          }}
        >
          Save
        </div>
        <div
          className="btn"
          onClick={() => {
            clearForm()
          }}
        >
          Clear
        </div>
      </div>
    </div>
  )
}

export default CreateBill
