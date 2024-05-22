// client/src/components/desktop/modules/documents/Documents.js
import React, { useState } from 'react';
import './Documents.css';

const Documents = ({ closeModule }) => {
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="module-window">
      <div className="title-bar">
        <span>Documents</span>
        <button onClick={() => closeModule('documents')}>X</button>
      </div>
      <div className="content">
        <div className="doc-circle" onClick={() => setShowDocs(!showDocs)}>
          <span>Show Documents</span>
        </div>
        {showDocs && (
          <div className="doc-list">
            <ul>
              <li>About Us</li>
              <li>White Paper</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Documents;
