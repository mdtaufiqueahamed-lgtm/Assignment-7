import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Call', value: 400 },
  { name: 'Text', value: 300 },
  { name: 'Video', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Stats = () => {
  return (
    
    <div className="w-full bg-white p-5 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Friendship Analytics</h2>
      <div style={{ width: '100%', height: 400 }}> 
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};





export default Stats;