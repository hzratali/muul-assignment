import React, { useState, useEffect } from 'react';
import cubejs from '@cubejs-client/core';
import { Line } from 'react-chartjs-2'; // Or whatever charting library you're using

const CUBEJS_API_URL = 'http://localhost:4000/cubejs-api/v1';
const cubejsApi = cubejs('CUBEJS_API_TOKEN', {
  apiUrl: `${CUBEJS_API_URL}/v1`,
});

const LineChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultSet = await cubejsApi.load({
        measures: ['YourTableName.valueSum'],
        dimensions: ['YourTableName.timestamp'],
        timeDimensions: [{
          dimension: 'YourTableName.timestamp',
          dateRange: 'Last 30 days',
        }],
        order: {
          'YourTableName.timestamp': 'asc',
        }
      });
      setData(resultSet.chartPivot());
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Your chart rendering logic here */}
      <Line
        data={{
          labels: data.map(d => d['YourTableName.timestamp']),
          datasets: [{
            label: 'Value Trend',
            data: data.map(d => d['YourTableName.valueSum']),
          }]
        }}
      />
    </div>
  );
};

export default LineChartComponent;
