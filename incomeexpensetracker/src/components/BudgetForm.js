import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

const BudgetForm = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const handleSaveBudget = () => {
    if (!isNaN(newBudget) && newBudget >= 0) {
      dispatch({
        type: 'SET_BUDGET',
        payload: parseFloat(newBudget),
      });
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="budget">New Budget:</label>
        <input
          type="number"
          id="budget"
          className="form-control"
          value={newBudget}
          onChange={handleBudgetChange}
        />
      </div>
      <div className="text-right">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSaveBudget}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BudgetForm;