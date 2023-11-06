import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DailyTransaction from "./components/DailyTransaction";
import SetBudgetButton from "./components/SetBudgetButton";
import ScheduledExpenses from "./components/ScheduledExpenses";
import "./App.css";
import DoughnutChart from "./components/Doughnut";
import BarChart from "./components/BarChart";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid">
        <div>
          <nav id="sidebar" className="sidebar_navbar">
            <Sidebar />
          </nav>
          <main className=" main_container">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <DailyTransaction />
                </div>
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflowY: "auto",
                  }}
                >
                  <div>
                    <SetBudgetButton />
                  </div>
                  <div className="barcharts">
                    <h6>Monthly Overview</h6>
                    <div style={{}}>
                      <BarChart title={"Expenditure"} />
                      <BarChart title={"Income"} />
                    </div>
                  </div>
                  <div>
                    <ScheduledExpenses />
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-8">
                  
                </div>
                <div className="col-md-4">
                  <ScheduledExpenses />
                </div>
              </div> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
