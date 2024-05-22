// client/src/components/desktop/modules/settings/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ closeModule }) => {
  const [bgColor, setBgColor] = useState('#2C001E');
  const [menuColor, setMenuColor] = useState('#333');

  const applySettings = () => {
    document.documentElement.style.setProperty('--bg-color', bgColor);
    document.documentElement.style.setProperty('--menu-color', menuColor);
  };

  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Settings</span>
        <button onClick={() => closeModule('settings')}>X</button>
      </div>
      <div className="content">
        <div>
          <label>Background Color:</label>
          <input 
            type="color" 
            value={bgColor} 
            onChange={(e) => setBgColor(e.target.value)} 
          />
        </div>
        <div>
          <label>Menu Bar Color:</label>
          <input 
            type="color" 
            value={menuColor} 
            onChange={(e) => setMenuColor(e.target.value)} 
          />
        </div>
        <button onClick={applySettings}>Apply</button>
      </div>
    </div>
  );
};

export default Settings;
