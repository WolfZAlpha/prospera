// client/src/components/desktop/Desktop.js
import React, { useState } from 'react';
import MenuBar from './MenuBar';
import Terminal from './modules/terminal/Terminal';
import PresaledApp from './modules/presaledApp/PresaledApp';
import Dashboard from './modules/dashboard/Dashboard';  // Ensure this matches the file name exactly
import Tokenomics from './modules/tokenomics/Tokenomics';
import Documents from './modules/documents/Documents';
import Mp3Player from './modules/mp3player/Mp3Player';
import Settings from './modules/settings/Settings';
import './Desktop.css';

const Desktop = () => {
  const [windows, setWindows] = useState([]);

  const openModule = (module) => {
    setWindows([...windows, module]);
  };

  const closeModule = (module) => {
    setWindows(windows.filter(win => win !== module));
  };

  return (
    <div className="desktop-container">
      <MenuBar openModule={openModule} />
      <div className="workspace">
        {windows.includes('terminal') && <Terminal closeModule={closeModule} />}
        {windows.includes('presaledApp') && <PresaledApp closeModule={closeModule} />}
        {windows.includes('dashboard') && <Dashboard closeModule={closeModule} />}
        {windows.includes('tokenomics') && <Tokenomics closeModule={closeModule} />}
        {windows.includes('documents') && <Documents closeModule={closeModule} />}
        {windows.includes('mp3player') && <Mp3Player closeModule={closeModule} />}
        {windows.includes('settings') && <Settings closeModule={closeModule} />}
      </div>
    </div>
  );
};

export default Desktop;
