import React from 'react';
import { useCubeQuery } from '@cubejs-client/react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Colors for each slice of the pie chart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6361'];

const PieChartComponent = () => {
  // Querying Cube.js for the sum of value grouped by name
  const { resultSet, isLoading, error } = useCubeQuery({
    measures: ['DemoData.totalValue'],
    dimensions: ['DemoData.name']
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // The data is formatted for Recharts
  const data = resultSet.chartPivot();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="DemoData.totalValue"
          nameKey="x"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
