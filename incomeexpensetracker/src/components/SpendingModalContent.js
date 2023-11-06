import React, { useEffect, useState } from "react";
import "./SpendingModalContent.css";
import { data } from "./data";
import { dblClick } from "@testing-library/user-event";

function SpendingModalContent({
  newExpense,
  newAmount,
  setNewExpense,
  setNewAmount,
  addSpendingItem,
  closeModal,
  setType,
  setCategory,
  category,
  type,
}) {
  const [categoryData, setCategoryData] = useState(
    JSON.parse(localStorage.getItem("category"))
  );
  const [error, setError] = useState(false);
  useEffect(() => {
    setCategoryData(JSON.parse(localStorage.getItem("category")));
  }, []);

  const handleRadioOptionChange = (e) => {
    setType(e.target.value);
  };

  const handeleDropdownChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAmountChange = (e) => {
    // console.log(e.target.value);
    const amount = parseFloat(e.target.value);
    if (amount < 0) {
      setError(true);
    } else {
      setError(false);
      setNewAmount(amount);
    }
  };

  const handleAddSpendingItem = () => {
    if (!newExpense || !newAmount || !type || !category) {
      alert("Please fill in all required fields.");
      return;
    } else {
      addSpendingItem();
    }
  };

  return (
    <div className="modal-content">
      <h3>Add Transaction</h3>
      <div className="form-group">
        <label className="modallabel" htmlFor="expense">
          Transaction Name:
        </label>
        <input
          type="text"
          id="expense"
          className="form-control"
          value={newExpense}
          onChange={(e) => setNewExpense(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="modallabel" htmlFor="amount">
          Amount:
        </label>
        <input
          type="number"
          min={0}
          id="amount"
          className="form-control"
          value={newAmount}
          onChange={handleAmountChange}
        />
      </div>
      {error && (
        <span style={{ color: "red" }}>{"money should be positive"}</span>
      )}
      <label className="modallabel">
        <input
          type="radio"
          value="Income"
          name="test"
          onChange={(e) => handleRadioOptionChange(e)}
        />
        Income
      </label>

      <label className="modallabel">
        <input
          type="radio"
          value="Expenditure"
          name="test"
          onChange={(e) => handleRadioOptionChange(e)}
        />
        Expenditure
      </label>

      <label className="modallabel">
        Select Category:
        <select onChange={(e) => handeleDropdownChange(e)}>
          <option value="dropdownOption1">Available Categories</option>
          {data.categories?.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
          {categoryData?.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddSpendingItem} // Use the modified handler
      >
        Add
      </button>
      <button type="button" className="btn btn-secondary" onClick={closeModal}>
        Cancel
      </button>
    </div>
  );
}

export default SpendingModalContent;
