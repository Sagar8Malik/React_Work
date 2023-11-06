// import React, { useState, useEffect, useMemo } from "react";
// import Modal from "react-modal";
// import "./DailyTransaction.css";
// import SpendingModalContent from "./SpendingModalContent";
// import HorizontalCalendar from "./HorizontalCalendar";
// import { deleteExpense } from "./data";
// import { PeopleAltOutlined } from "@mui/icons-material";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import CallReceivedIcon from "@mui/icons-material/CallReceived";
// import searchIcon from "../searchicon.png";

// const expenses = [
//   {
//     title: "Income",
//     icon: <ArrowOutwardIcon />,
//     amount: "3850.56",
//     id: "123",
//   },
//   {
//     title: "Spendings",
//     icon: <CallReceivedIcon />,
//     amount: "850.56",
//     id: "123d",
//   },
// ];

// function DailyTransaction() {
//   const [spendingData, setSpendingData] = useState([]);
//   const [newExpense, setNewExpense] = useState("");
//   const [newAmount, setNewAmount] = useState("");
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [type, setType] = useState("");
//   const [category, setCategory] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [incomedata, setIncomeData] = useState(7000);
//   const [expenditureData, setExpenditureData] = useState(3000);

//   const fetchData = () => {
//     const newData = JSON.parse(localStorage.getItem("spendingData")) || [];
//     const updatedData = newData.map((item) => ({
//       ...item,
//       date: new Date(item.date),
//     }));
//     setSpendingData(updatedData);
//   };

//   useEffect(() => {
//     fetchData();

//     const storedIncomeData = localStorage.getItem("incomeData");
//     const storedExpenditureData = localStorage.getItem("expenditureData");
//     if (storedIncomeData !== null) {
//       setIncomeData(parseFloat(storedIncomeData));
//     }
//     if (storedExpenditureData !== null) {
//       setExpenditureData(parseFloat(storedExpenditureData));
//     }
//   }, []);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const filteredExpenses = useMemo(() => {
//     if (searchQuery) {
//       return spendingData.filter((exp) =>
//         exp.company.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     return spendingData.filter((exp) => {
//       const expDate = new Date(exp.date);
//       return (
//         expDate.getDate() === selectedDate.getDate() &&
//         expDate.getMonth() === selectedDate.getMonth() &&
//         expDate.getFullYear() === selectedDate.getFullYear()
//       );
//     });
//   }, [spendingData, searchQuery, selectedDate]);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const addSpendingItem = () => {
//     if (newExpense && newAmount && type) {
//       const newItem = {
//         company: newExpense,
//         amount:
//           type === "Expenditure" ? -1 * Number(newAmount) : Number(newAmount),
//         date: new Date(),
//         sourceType: type,
//         category: category,
//         id: Math.floor(Math.random() * 1000),
//       };

//       const updatedSpendingData = spendingData.concat(newItem);

//       localStorage.setItem("spendingData", JSON.stringify(updatedSpendingData));

//       totolData(type, newAmount);
//       setNewExpense("");
//       setNewAmount("");
//       setType("");
//       setCategory("");
//       closeModal();

//       setSpendingData(updatedSpendingData);
//     }
//   };

//   const formatDate = (inputDateString) => {
//     const inputDate = new Date(inputDateString);

//     const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const months = [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     const day = inputDate.getDate();
//     const month = months[inputDate.getMonth()];
//     const year = inputDate.getFullYear();
//     const hours = inputDate.getHours();
//     const minutes = inputDate.getMinutes();
//     const amPm = hours >= 12 ? "PM" : "AM";
//     const formattedHours = hours % 12 || 12; // Convert to 12-hour format

//     const formattedDate = `${day} ${month} ${year}, ${formattedHours}:${minutes
//       .toString()
//       .padStart(2, "0")} ${amPm}`;

//     return formattedDate;
//   };

//   const deleteExpenseItem = (id) => {
//     const updatedExpenses = spendingData.filter((expense) => expense.id !== id);
//     localStorage.setItem("spendingData", JSON.stringify(updatedExpenses));
//     setSpendingData(updatedExpenses);
//   };

//   const totolData = (name, value) => {
//     if (name === "Income") {
//       const newIncomeData = parseFloat(incomedata) + parseFloat(value);
//       setIncomeData(newIncomeData);
//       localStorage.setItem("incomeData", newIncomeData);
//     } else {
//       const newExpenditureData =
//         parseFloat(expenditureData) + parseFloat(value);
//       setExpenditureData(newExpenditureData);
//       localStorage.setItem("expenditureData", newExpenditureData);
//     }
//   };

//   // localStorage.removeItem("spendingData");

//   return (
//     <div className="daily-transaction">
//       <div className="transaction-header">
//         <h4 className="daily">Daily Transaction</h4>
//         <div>
//           <span style={{ marginLeft: "400px" }}>
//             <i className="fa fa-calendar-o" aria-hidden="true"></i>
//           </span>
//           <button
//             type="button"
//             className="plus-icon"
//             onClick={openModal}
//             style={{ marginLeft: "20px" }}
//           >
//             +
//           </button>
//         </div>
//       </div>

//       <div className="search-box">
//         <input
//           type="text"
//           className="searchField"
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <img src={searchIcon} alt="Search" />
//       </div>
//       <HorizontalCalendar onDateSelect={(date) => setSelectedDate(date)} />

//       <hr
//         style={{
//           width: "100%",
//           border: "1px solid #000000",
//           margin: "1rem 0.5rem",
//         }}
//       />

//       <div className="income-div">
//         {expenses?.map((income, index) => {
//           return (
//             <div className="expenses" key={index}>
//               {income.icon}
//               <div className="titles">
//                 <label>{income.title}</label>
//                 <label style={{ fontWeight: "bold" }}>
//                   ₹{" "}
//                   {income?.title === "Spendings" ? expenditureData : incomedata}
//                 </label>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="companies">
//         {filteredExpenses.map((expense, index) => {
//           const formattedDate = formatDate(expense.date);
//           return (
//             <div className="company" key={index}>
//               <div className="title-div">
//                 {expense.icon ? expense.icon : <PeopleAltOutlined />}
//                 <div className="titles">
//                   <label className="companies__bold">{expense.company}</label>
//                   <label>{formattedDate}</label>
//                 </div>
//               </div>
//               <label className="companies__bold">
//                 {expense.amount > 0 ? "+ " : "- "} ₹{Math.abs(expense.amount)}
//               </label>
//             </div>
//           );
//         })}
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Add Spending Modal"
//       >
//         <SpendingModalContent
//           newExpense={newExpense}
//           newAmount={newAmount}
//           setNewExpense={setNewExpense}
//           setNewAmount={setNewAmount}
//           addSpendingItem={addSpendingItem}
//           closeModal={closeModal}
//           setType={setType}
//           setCategory={setCategory}
//           category={category}
//           type={type}
//         />
//       </Modal>
//     </div>
//   );
// }

// export default DailyTransaction;

//-------------------------------------------------------------------------------------------------

import React, { useState, useEffect, useMemo } from "react";

import Modal from "react-modal";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import "./DailyTransaction.css";

import SpendingModalContent from "./SpendingModalContent";

import HorizontalCalendar from "./HorizontalCalendar";

import { PeopleAltOutlined } from "@mui/icons-material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import CallReceivedIcon from "@mui/icons-material/CallReceived";

import searchIcon from "../searchicon.png";

const expenses = [
  {
    title: "Income",

    icon: <ArrowOutwardIcon />,

    amount: "3850.56",

    id: "123",
  },

  {
    title: "Spendings",

    icon: <CallReceivedIcon />,

    amount: "850.56",

    id: "123d",
  },
];

function DailyTransaction() {
  const [spendingData, setSpendingData] = useState([]);

  const [newExpense, setNewExpense] = useState("");

  const [newAmount, setNewAmount] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [selectedDate, setSelectedDate] = useState(null); // Initially, no specific date is selected

  const [type, setType] = useState("");

  const [category, setCategory] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const [incomedata, setIncomeData] = useState(7000);

  const [expenditureData, setExpenditureData] = useState(3000);

  const fetchData = () => {
    const yearMonthKey = `${selectedYear}-${selectedMonth}`;

    const newData = JSON.parse(localStorage.getItem(yearMonthKey)) || [];

    const updatedData = newData.map((item) => ({
      ...item,

      date: new Date(item.date),
    }));

    setSpendingData(updatedData);
  };

  useEffect(() => {
    fetchData();

    const storedIncomeData = localStorage.getItem("incomeData");

    const storedExpenditureData = localStorage.getItem("expenditureData");

    if (storedIncomeData !== null) {
      setIncomeData(parseFloat(storedIncomeData));
    }

    if (storedExpenditureData !== null) {
      setExpenditureData(parseFloat(storedExpenditureData));
    }
  }, [selectedYear, selectedMonth]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
  };

  // Define handleSearchChange function

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Define filteredExpenses using useMemo

  const filteredExpenses = useMemo(() => {
    if (searchQuery) {
      return spendingData.filter((exp) =>
        exp.company.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    if (selectedDate) {
      // Filter transactions for the selected date

      return spendingData.filter((exp) => {
        const expDate = new Date(exp.date);

        return (
          expDate.getDate() === selectedDate.getDate() &&
          expDate.getMonth() === selectedDate.getMonth() &&
          expDate.getFullYear() === selectedDate.getFullYear()
        );
      });
    } else if (selectedMonth !== null) {
      // Filter transactions for the selected month

      return spendingData.filter((exp) => {
        const expDate = new Date(exp.date);

        return (
          expDate.getMonth() === selectedMonth &&
          expDate.getFullYear() === selectedYear
        );
      });
    }

    // If neither date nor month is selected, show all transactions

    return spendingData;
  }, [spendingData, searchQuery, selectedDate, selectedMonth, selectedYear]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const addSpendingItem = () => {
    if (newExpense && newAmount && type) {
      const parsedAmount = parseFloat(newAmount);

      if (parsedAmount > 0) {
        // Only allow positive values

        const newItem = {
          company: newExpense,

          amount: type === "Expenditure" ? -parsedAmount : parsedAmount,

          date: selectedDate,

          sourceType: type,

          category: category,

          id: Math.floor(Math.random() * 1000),
        };

        const updatedSpendingData = spendingData.concat(newItem);

        const yearMonthKey = `${selectedYear}-${selectedMonth}`;

        const newData = JSON.parse(localStorage.getItem(yearMonthKey)) || [];

        newData.push(newItem);

        localStorage.setItem(yearMonthKey, JSON.stringify(newData));

        totolData(type, parsedAmount);

        setNewExpense("");

        setNewAmount("");

        setType("");

        setCategory("");

        closeModal();

        setSpendingData(updatedSpendingData);
      } else {
        alert("Please enter a positive amount.");
      }
    }
  };

  const formatDate = (inputDateString) => {
    const inputDate = new Date(inputDateString);

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const months = [
      "Jan",

      "Feb",

      "Mar",

      "Apr",

      "May",

      "Jun",

      "Jul",

      "Aug",

      "Sep",

      "Oct",

      "Nov",

      "Dec",
    ];

    const day = inputDate.getDate();

    const month = months[inputDate.getMonth()];

    const year = inputDate.getFullYear();

    const hours = inputDate.getHours();

    const minutes = inputDate.getMinutes();

    const amPm = hours >= 12 ? "PM" : "AM";

    const formattedHours = hours % 12 || 12;

    const formattedDate = `${day} ${month} ${year}, ${formattedHours}:${minutes

      .toString()

      .padStart(2, "0")} ${amPm}`;

    return formattedDate;
  };

  const deleteExpenseItem = (id) => {
    const updatedExpenses = spendingData.filter((expense) => expense.id !== id);

    const yearMonthKey = `${selectedYear}-${selectedMonth}`;

    localStorage.setItem(yearMonthKey, JSON.stringify(updatedExpenses));

    setSpendingData(updatedExpenses);
  };

  const totolData = (name, value) => {
    if (name === "Income") {
      const newIncomeData = parseFloat(incomedata) + parseFloat(value);

      setIncomeData(newIncomeData);

      localStorage.setItem("incomeData", newIncomeData);
    } else {
      const newExpenditureData =
        parseFloat(expenditureData) + parseFloat(value);

      setExpenditureData(newExpenditureData);

      localStorage.setItem("expenditureData", newExpenditureData);
    }
  };

  // localStorage.removeItem("spendingData");

  return (
    <div className="daily-transaction">
      <div className="transaction-header">
        <h4 className="daily">Daily Transaction</h4>

        <div className="date-month-selectors">
          <div className="date-selector">
            <span style={{ marginRight: "8px" }}>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
            </span>

            <DatePicker
              selected={selectedDate}
              onChange={handleDatePickerChange}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className="month-selector">
            <label>Select Month: </label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            >
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="plus-icon"
            onClick={openModal}
            style={{ marginLeft: "20px" }}
          >
            +
          </button>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="searchField"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <img src={searchIcon} alt="Search" />
      </div>

      <HorizontalCalendar onDateSelect={handleDateSelect} />

      <hr
        style={{
          width: "100%",
          border: "1px solid #000000",
          margin: "1rem 0.5rem",
        }}
      />

      <div className="income-div">
        {expenses?.map((income, index) => {
          return (
            <div className="expenses" key={index}>
              {income.icon}
              <div className="titles">
                <label>{income.title}</label>
                <label style={{ fontWeight: "bold" }}>
                  ₹{" "}
                  {income?.title === "Spendings" ? expenditureData : incomedata}
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <div className="companies">
        {filteredExpenses.map((expense, index) => {
          const formattedDate = formatDate(expense.date);

          return (
            <div className="company" key={index}>
              <div className="title-div">
                {expense.icon ? expense.icon : <PeopleAltOutlined />}

                <div className="titles">
                  <label className="companies__bold">{expense.company}</label>

                  <label>{formattedDate}</label>
                </div>
              </div>

              <label className="companies__bold">
                {expense.amount > 0 ? "+ " : "- "} ₹{Math.abs(expense.amount)}
              </label>

              <button
                className="delete-button"
                onClick={() => deleteExpenseItem(expense.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Add Spending Modal"
      >
        <SpendingModalContent
          newExpense={newExpense}
          newAmount={newAmount}
          setNewExpense={setNewExpense}
          setNewAmount={setNewAmount}
          addSpendingItem={addSpendingItem}
          closeModal={closeModal}
          setType={setType}
          setCategory={setCategory}
          category={category}
          type={type}
        />
      </Modal>
    </div>
  );
}

export default DailyTransaction;
