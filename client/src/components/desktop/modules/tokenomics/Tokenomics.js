// client/src/components/desktop/modules/tokenomics/Tokenomics.js
import React from 'react';
import './Tokenomics.css';

const Tokenomics = ({ closeModule }) => {
  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Tokenomics</span>
        <button onClick={() => closeModule('tokenomics')}>X</button>
      </div>
      <div className="content">
        {/* Tokenomics content here */}
      </div>
    </div>
  );
};

export default Tokenomics;
