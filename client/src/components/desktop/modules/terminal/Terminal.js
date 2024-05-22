// client/src/components/desktop/modules/terminal/Terminal.js
import React, { useState } from 'react';
import './Terminal.css';

const Terminal = ({ closeModule }) => {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState('');

  const handleCommand = () => {
    const newCommands = [...commands, input];
    if (input === 'clear terminal') {
      setCommands([]);
    } else if (input.startsWith('npm run')) {
      // Handle specific commands
    }
    setCommands(newCommands);
    setInput('');
  };

  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Terminal</span>
        <button onClick={() => closeModule('terminal')}>X</button>
      </div>
      <div className="content">
        <div className="terminal-output">
          {commands.map((cmd, index) => (
            <div key={index}>{cmd}</div>
          ))}
        </div>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleCommand()} 
        />
      </div>
    </div>
  );
};

export default Terminal;
