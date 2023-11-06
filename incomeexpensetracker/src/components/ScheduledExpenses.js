import React from "react";

const ScheduledExpenses = () => {
  // Sample scheduled expenses data
  const scheduledExpenses = [
    {
      id: 1,
      name: "Netflix",
      amount: 500,
      image: "images/netflix.png",
      color: "black",
    },
    {
      id: 2,
      name: "YouTube",
      amount: 200,
      image: "images/youtube.png",
      color: "red",
    },
    {
      id: 3,
      name: "Spotify",
      amount: 400,
      image: "images/spotify.png",
      color: "black",
    },
    {
      id: 4,
      name: "Hotstar",
      amount: 300,
      image: "images/close.png",
      color: "blue",
    },
  ];

  return (
    <div className="scheduled-expenses">
      <h4>Scheduled Expenses</h4>
      <div className="secard-container">
        {scheduledExpenses.map((expense) => (
          <div
            key={expense.id}
            className="card"
            style={{ background: expense.color }}
          >
            <span className="price">₹ {expense.amount}/m</span>
            <>
              {" "}
              <img src={expense.image} alt={expense.name} className="logo" />
              <p className="title" style={{ textAlign: "left" }}>
                {expense.name}
              </p>
            </>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledExpenses;
