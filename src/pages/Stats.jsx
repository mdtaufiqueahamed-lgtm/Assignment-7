import React from 'react';
import { BarChart3, TrendingUp, Users } from 'lucide-react';

const Stats = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-8">Friendship Statistics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <TrendingUp className="mx-auto text-indigo-600 mb-4" size={40} />
          <h3 className="text-lg font-medium text-gray-500">Contact Rate</h3>
          <p className="text-3xl font-bold mt-2">85%</p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <Users className="mx-auto text-blue-600 mb-4" size={40} />
          <h3 className="text-lg font-medium text-gray-500">Active Friends</h3>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <BarChart3 className="mx-auto text-green-600 mb-4" size={40} />
          <h3 className="text-lg font-medium text-gray-500">Total Interactions</h3>
          <p className="text-3xl font-bold mt-2">48</p>
        </div>
      </div>

      <div className="mt-12 p-10 bg-indigo-50 rounded-3xl border-2 border-dashed border-indigo-200">
        <p className="text-indigo-600 font-medium italic">Detailed analytics coming soon...</p>
      </div>
    </div>
  );
};

export default Stats;