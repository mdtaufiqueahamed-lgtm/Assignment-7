import React from 'react';

const Timeline = () => {
  
  const history = JSON.parse(localStorage.getItem('timeline')) || [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Interaction Timeline</h1>
      {history.length === 0 ? (
        <p className="text-gray-500">No logs found yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item, index) => (
            <div key={index} className="p-4 bg-white shadow rounded-lg border">
              <p className="font-bold">{item.type} with {item.friendName}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline; 