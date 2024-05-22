// client/src/components/desktop/modules/mp3player/Mp3Player.js
import React from 'react';
import './Mp3Player.css';

const Mp3Player = ({ closeModule }) => {
  return (
    <div className="module-window">
      <div className="title-bar">
        <span>MP3 Player</span>
        <button onClick={() => closeModule('mp3player')}>X</button>
      </div>
      <div className="content">
        {/* MP3 Player content here */}
      </div>
    </div>
  );
};

export default Mp3Player;
