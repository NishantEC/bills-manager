import React from "react";
import { useDispatch } from "react-redux";
import { deleteBill } from "../reducers/billSlice";
import { openModal } from "../reducers/modalSlice";

const BillCard = ({ id, description, category, amount, date }) => {
  const dispatch = useDispatch()
  return (
    <div className="billcard">
      <div className="card-content">
      <span>
        <h3>{description}</h3>
        <div className="date grey">
          Date: <input className="black bold" type="date" value={date} disabled/>
        </div>
      </span>
      <span>
        <div className="category grey">
          Category: <span className="black bold"> {category}</span>
        </div>
        <div className="amount grey">
          Amount: <span className="black bold"> {amount}</span>
        </div>
        </span>
      </div>
        <div className="btns">
                <div className='btn' onClick={() => {dispatch(openModal(id))}}>update</div>
                <div className='btn' onClick={() => {dispatch(deleteBill(id))}}>delete</div>
        </div>
    </div>
  );
};

export default BillCard;
