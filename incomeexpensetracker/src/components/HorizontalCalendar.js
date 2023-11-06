// import React, { useState } from "react";
// import "./HorizontalCalendar.css";

// const HorizontalCalendar = ({ onDateSelect }) => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const scrollLeft = () => {
//     setScrollPosition(scrollPosition - 1);
//   };

//   const scrollRight = () => {
//     setScrollPosition(scrollPosition + 1);
//   };

//   const numVisibleDates = 7;
//   const startDate = new Date();

//   startDate.setDate(startDate.getDate() + scrollPosition);

//   const calendarData = [];

//   for (let i = 0; i < numVisibleDates; i++) {
//     const date = new Date(startDate);
//     date.setDate(startDate.getDate() + i);
//     calendarData.push(date);
//   }

//   const handleDateClick = (date) => {
//     onDateSelect(date);
//   };

//   return (
//     <div className="horizontal-calendar">
//       <button className="horizontal-calendar-button" onClick={scrollLeft}>
//         &lt;
//       </button>
//       <div className="horizontal-calendar-items" style={{ display: "flex" }}>
//         {calendarData.map((date, index) => (
//           <div
//             key={index}
//             className="horizontal-calendar-item"
//             onClick={() => handleDateClick(date)}
//           >
//             <div className="day" style={{ margin: "5px" }}>
//               {date
//                 .toLocaleDateString("en-US", { weekday: "short" })
//                 .toUpperCase()}
//             </div>
//             <div
//               className={`${
//                 date.getDate() === new Date().getDate() ? "current-date" : ""
//               }`}
//             >
//               <div
//                 className="date"
//                 style={{
//                   border: "1px solid #d3d3d3",
//                   borderRadius: "15px",
//                   padding: "10px",
//                   fontSize: "20px",
//                 }}
//               >
//                 {date.getDate()}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="horizontal-calendar-button" onClick={scrollRight}>
//         &gt;
//       </button>
//     </div>
//   );
// };

// export default HorizontalCalendar;

//----------------------------------------------------------------------

import React, { useState } from "react";

import "./HorizontalCalendar.css";

const HorizontalCalendar = ({ onDateSelect }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [selectedDate, setSelectedDate] = useState(null); // Initialize selectedDate as null.

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  const numVisibleDates = 7;

  const startDate = new Date();

  startDate.setDate(startDate.getDate() + scrollPosition);

  const calendarData = [];

  for (let i = 0; i < numVisibleDates; i++) {
    const date = new Date(startDate);

    date.setDate(startDate.getDate() + i);

    calendarData.push(date);
  }

  const handleDateClick = (date) => {
    setSelectedDate(date); // Update selected date.

    onDateSelect(date);
  };

  return (
    <div className="horizontal-calendar">
      <button className="horizontal-calendar-button" onClick={scrollLeft}>
        &lt;
      </button>

      <div className="horizontal-calendar-items" style={{ display: "flex" }}>
        {calendarData.map((date, index) => (
          <div
            key={index}
            className={`horizontal-calendar-item ${
              selectedDate && date.getDate() === selectedDate.getDate()
                ? "selected-date"
                : "" // Apply the "selected-date" class conditionally.
            }`}
            onClick={() => handleDateClick(date)}
          >
            <div className="day" style={{ margin: "5px" }}>
              {date

                .toLocaleDateString("en-US", { weekday: "short" })

                .toUpperCase()}
            </div>

            <div>
              <div
                className="date"
                style={{
                  border: "1px solid #d3d3d3",

                  borderRadius: "15px",

                  padding: "10px",

                  fontSize: "20px",

                  color:
                    selectedDate && date.getDate() === selectedDate.getDate()
                      ? "blue"
                      : "", // Apply the red color conditionally.
                }}
              >
                {date.getDate()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="horizontal-calendar-button" onClick={scrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default HorizontalCalendar;
