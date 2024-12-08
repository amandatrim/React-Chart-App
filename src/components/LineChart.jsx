import React from 'react';
// Import the skeleton chart component
import ChartComponent from './ChartComponent';

const LineChart = ({ data }) => {
  // Configure chart data with labels (x-axis) and a dataset for the line chart
  const chartData = {
    labels: data.months, 
    datasets: [
      {
        label: 'Monthly Profits', 
        data: data.profits, 
        borderColor: 'rgba(54, 162, 235, 1)', 
        borderWidth: 2,
        fill: false, 
      },
    ],
  };

  // Chart options for responsiveness and legend positioning
  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: 'top', 
      },
    },
  };

  // Render the ChartComponent as a line chart 
  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
