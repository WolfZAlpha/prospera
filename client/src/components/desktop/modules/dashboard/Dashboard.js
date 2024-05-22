// client/src/components/desktop/modules/dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ closeModule }) => {
  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Dashboard</span>
        <button onClick={() => closeModule('dashboard')}>X</button>
      </div>
      <div className="content">
        {/* Dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;
