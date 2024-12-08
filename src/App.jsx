import React, { useState, useEffect } from 'react';
// Import all the charts from their respective components
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

const App = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setChartData(data)) // Set fetched data to state
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Show loading message while data is being fetched
  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    // Render all the charts in this div
    <div>
      <h1>Dynamic Chart Dashboard</h1>
      <h1> Barchart </h1>
      <BarChart data={chartData} />
      <h1> Line Chart</h1>
      <LineChart data={chartData} />
      <h1> Scatter Chart</h1>
      <ScatterChart data={chartData} />
      <h1> Bubble Chart</h1>
      <BubbleChart data={chartData} />


    </div>
  );
};

export default App;
