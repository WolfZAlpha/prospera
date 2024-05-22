// client/src/components/desktop/MenuBar.js
import React from 'react';
import './MenuBar.css';

const MenuBar = ({ openModule }) => {
  return (
    <div className="menu-bar">
      <button onClick={() => openModule('terminal')}>Terminal</button>
      <button onClick={() => openModule('presaledApp')}>Pre-sale dApp</button>
      <button onClick={() => openModule('dashboard')}>Dashboard</button>
      <button onClick={() => openModule('tokenomics')}>Tokenomics</button>
      <button onClick={() => openModule('documents')}>Documents</button>
      <button onClick={() => openModule('mp3player')}>MP3 Player</button>
      <button onClick={() => openModule('settings')}>Settings</button>
    </div>
  );
};

export default MenuBar;
