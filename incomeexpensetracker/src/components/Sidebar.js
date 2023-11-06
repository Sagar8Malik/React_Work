import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addBank, addCategory } from "../components/data";
import { data } from "./data";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("bank");
  const [newName, setNewName] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setNewName("");
  };

  const handleShow = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleSave = () => {
    if (modalType === "bank") {
      // addBank(newName);
      if (localStorage.getItem("accounts")) {
        const array = [
          ...JSON.parse(localStorage.getItem("accounts")),
          newName,
        ];
        localStorage.setItem("accounts", JSON.stringify([...array]));
      } else {
        const array = [];
        array.push(newName);
        localStorage.setItem("accounts", JSON.stringify([...array]));
      }
    } else if (modalType === "category") {
      // addCategory(newName);
      if (localStorage.getItem("category")) {
        const array = [
          ...JSON.parse(localStorage.getItem("category")),
          newName,
        ];
        localStorage.setItem("category", JSON.stringify([...array]));
      } else {
        const array = [];
        array.push(newName);
        localStorage.setItem("category", JSON.stringify([...array]));
      }
    }
    handleClose();
  };

  // localStorage.removeItem("accounts");
  // localStorage.removeItem("category");

  return (
    <div className="sidebar_component">
      <h3 className="sidebar_component_heading">
        Finance<span>Expense</span>
      </h3>
      <div className="user-profile">
        <div className="user-image">
          <img
            src="images\profile.png"
            alt="User"
            className="img-fluid rounded-circle"
          />
        </div>
        <p className="">Welcome Back</p>
        <p className="name">
          <h5 className="user-name">Sonam Wangchuk</h5>
        </p>
      </div>
      <div className="accounts">
        <h6>
          <strong>ACCOUNTS</strong>
        </h6>
        <ul style={{ marginLeft: "50px" }}>
          {data.banks.map((bank) => (
            <li key={bank.id}>{bank.name}</li>
          ))}
          {JSON.parse(localStorage.getItem("accounts"))?.map((bank) => (
            <li key={bank.id}>{bank}</li>
          ))}
          <li style={{ listStyle: "none", marginLeft: "-21px" }}>
            {/* <div className="add-container"> */}
            <a href="#" onClick={() => handleShow("bank")}>
              <span className="add-icon">+</span> Add Another
            </a>
            {/* </div> */}
          </li>
        </ul>
      </div>

      <div className="category">
        <h6>
          <strong>CATEGORIES</strong>
        </h6>
        <ul style={{ marginLeft: "50px" }}>
          {data.categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
          {JSON.parse(localStorage.getItem("category"))?.map((bank) => (
            <li key={bank.id}>{bank}</li>
          ))}
          <li style={{ listStyle: "none", marginLeft: "-21px" }}>
            <a href="#" onClick={() => handleShow("category")}>
              <span className="add-icon">+</span> Add More
            </a>
          </li>
        </ul>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        style={{ paddingTop: "250px" }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Add {modalType === "bank" ? "Bank" : "Category"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Enter ${
                  modalType === "bank" ? "bank" : "category"
                } name`}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Sidebar;
