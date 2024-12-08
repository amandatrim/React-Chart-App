import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({ data }) => {
  // Prepare bubble chart data
  const chartData = {
    datasets: [
      {
        label: 'Sales, Expenses, and Profits',
        data: data.expenses.map((expense, index) => ({
          x: expense, 
          y: data.profits[index], 
          r: data.sales[index] / 1000, 
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // color of the bubble chart
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Legend placement
      },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
