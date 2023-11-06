import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
function DoughnutChart() {
  // var data = JSON.parse(localStorage.getItem("spendingData"));
  var data = JSON.parse(localStorage.getItem("spendingData")) || [];
  var reqData = [];
  useEffect(() => {
    data.map((item) => {
      if (item.sourceType === "Expenditure") {
        var opt = {};
        opt["value"] = -1 * parseInt(item.amount);
        opt["name"] = item.category;
        reqData.push(opt);
      }
    });
  }, []);

  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      // top: "5%",
      // align: "right",
      // right: "auto",
      // orient: "vertical",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["25%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: reqData,
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default DoughnutChart;
