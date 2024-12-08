import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const ChartComponent = ({ type, data, options }) => {
  // Create a ref to reference the canvas element
  const chartRef = useRef(null);

  // Make a reference to hold the instance of the chart.
  let chartInstance = useRef(null);

  // Used useEffect to handle the lifecycle of the chart, the creation, update, and cleanup
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type,
      data,
      options,
    });

    // After the component unmounts, the chart instance is destroyed using the cleanup function.
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

   // Render a chart canvas element.
  return <canvas ref={chartRef}></canvas>;
};

export default ChartComponent;
