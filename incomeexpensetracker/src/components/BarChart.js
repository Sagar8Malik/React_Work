// import React, { useEffect } from "react";
// import ReactEcharts from "echarts-for-react";

// function BarChart({ title }) {
//   // var data = JSON.parse(localStorage.getItem("spendingData"));
//   var data = JSON.parse(localStorage.getItem("spendingData")) || [];
//   var reqData = [];
//   var xAxisData = [];
//   var yAxisData = [];
//   useEffect(() => {
//     data.forEach((item) => {
//       if (item.sourceType === title) {
//         var opt = {};
//         opt["value"] =
//           title === "Income"
//             ? parseInt(item.amount)
//             : -1 * parseInt(item.amount);
//         opt["name"] = item.category;
//         reqData.push(opt);
//         yAxisData.push(-1 * parseInt(item.amount));
//         xAxisData.push(item.category.slice(0, 2));
//       }
//     });
//   }, []);

//   const option = {
//     title: {
//       text: title,
//       //   subtext: "Sub Title",
//       left: "center",
//       top: "auto",
//       textStyle: {
//         fontSize: 15,
//       },
//       //   subtextStyle: {
//       //     fontSize: 20,
//       //   },
//     },

//     xAxis: {
//       type: "category",
//       data: xAxisData,
//     },

//     yAxis: {
//       type: "value",
//       data: yAxisData,
//     },

//     series: [
//       {
//         data: reqData,
//         type: "bar",
//         itemStyle: {
//           color: "#a90000",
//         },
//       },
//     ],
//   };

//   return <ReactEcharts option={option} style={{ width: "100%" }} />;
// }

// export default BarChart;

// -------------------------------------------------------------------------

import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";

function BarChart({ title }) {
  var data = JSON.parse(localStorage.getItem("spendingData")) || [];
  var reqData = [];
  var xAxisData = [];
  var yAxisData = [];
  var categoryColors = {}; // Object to store colors for each category

  useEffect(() => {
    data.forEach((item) => {
      if (item.sourceType === title) {
        var opt = {};
        opt["value"] =
          title === "Income"
            ? parseInt(item.amount)
            : -1 * parseInt(item.amount);
        opt["name"] = item.category;
        reqData.push(opt);
        yAxisData.push(-1 * parseInt(item.amount));
        xAxisData.push(item.category.slice(0, 2));

        // Generate a color for each unique category
        if (!categoryColors[item.category]) {
          categoryColors[item.category] = getRandomColor();
        }
      }
    });
  }, []);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const option = {
    title: {
      text: title,
      left: "center",
      top: "auto",
      textStyle: {
        fontSize: 15,
      },
    },

    xAxis: {
      type: "category",
      data: xAxisData,
    },

    yAxis: {
      type: "value",
      data: yAxisData,
    },

    series: [
      {
        data: reqData,
        type: "bar",
        itemStyle: {
          color: (params) => categoryColors[params.name], // Use category-specific color
        },
      },
    ],
  };

  return <ReactEcharts option={option} style={{ width: "100%" }} />;
}

export default BarChart;
