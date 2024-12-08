import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Dynamic Chart Dashboard</h1>
    </div>
  );
};

export default App;
