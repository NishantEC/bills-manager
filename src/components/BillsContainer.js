import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BillCard from "./BillCard";
import UpdateBill from "./UpdateBill";

const BillsContainer = () => {
  const bills = useSelector((store) => store.bills.bills);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const {isOpen,selectedId} = useSelector((state) => state.modal);
  const n = bills.length


  return (
    <div className="bills-container">
      <div className="filter-wrapper">
        Filter by -
        <select
          name="category"
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="FoodNDining">FoodNDining</option>
          <option value="utility">utility</option>
          <option value="shopping">shopping</option>
          <option value="household">household</option>
          <option value="education">education</option>
          <option value="Personal Care">Personal Care</option>
        </select>
      </div>
      {n? null: <h3 className="no-bills">No Bills are Present.</h3>}
      <div className="bills-wrapper">
        
        {filteredCategory === "all"
          ? bills.map((bill) => {
              return <BillCard {...bill} key={bill.id} />;
            })
          : bills
              .filter((bill) => bill.category === filteredCategory)
              .map((bill) => {
                return <BillCard {...bill} key={bill.id} />;
              })}
      </div>
      {isOpen && <UpdateBill {...selectedId}/>}
    </div>
  );
};

export default BillsContainer;
