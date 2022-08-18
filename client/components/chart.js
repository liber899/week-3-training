import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Chart({ chartData }) {
  return (
    <Doughnut
      data={chartData}
      width={"50%"}
      options={{ maintainAspectRatio: true }}
    />
  );
}

export default Chart;
