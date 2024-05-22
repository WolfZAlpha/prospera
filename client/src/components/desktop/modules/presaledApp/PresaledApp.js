// client/src/components/desktop/modules/presaledApp/PresaledApp.js
import React from 'react';
import './PresaledApp.css';

const PresaledApp = ({ closeModule }) => {
  const openPresale = () => {
    window.open('http://presale-dapp.prospera.defi', '_blank');
  };

  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Pre-sale dApp</span>
        <button onClick={() => closeModule('presaledApp')}>X</button>
      </div>
      <div className="content">
        <button onClick={openPresale}>Open Pre-sale dApp</button>
      </div>
    </div>
  );
};

export default PresaledApp;
