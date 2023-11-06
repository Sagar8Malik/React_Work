import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import BudgetForm from "./BudgetForm"; // Import the BudgetForm component
import { Diamond } from "@mui/icons-material";
import DoughnutChart from "./Doughnut";

function SetBudgetButton() {
  // State for managing the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal show
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="set-budget-button">
      <div className="set-budget-button__btn-container">
        <Button
          variant="primary"
          onClick={handleShowModal}
          className="set-budget-button__button"
        >
          Set a New Budget
        </Button>
        <Diamond className="diamond" />
      </div>
      <div class="doughnutabovetext">
        <h6>Expense Statistics</h6>
      </div>
      <div>
        <DoughnutChart />
      </div>
      {/* Modal for setting a new budget */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Set a New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Include the BudgetForm component here */}
          Budget
          {/* <BudgetForm
            onSave={(newBudget) => {
              // Handle saving the new budget here
              console.log("New Budget:", newBudget);
              handleCloseModal(); // Close the modal after saving
            }}
          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Budget
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SetBudgetButton;
