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
          r: Math.max(data.sales[index] / 1000, 7), // Ensure a minimum size
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)', // color for all bubbles
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
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const { x, y, r } = tooltipItem.raw;
            return `Expense: ${x}, Profit: ${y}, Sales: ${r * 1000}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',
        },
      },
    },
  };

  console.log('Bubble Chart Data:', chartData);

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
