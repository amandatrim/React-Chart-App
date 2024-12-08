import React from "react";
import ChartComponent from "./ChartComponent";

const BarChart = ({ data }) => {

  //This code gets the chart ready for data with labels and the dataset various properties
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Sales",
        data: data.sales,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1, 
      },
    ],
  };

  // Options for configuring how the chart appears and it's behaviour
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Render the ChartComponent with the bar chart type
  return <ChartComponent type="bar" data={chartData} options={options} />;
};


// Export the barchart component
export default BarChart;
