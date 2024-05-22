import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Terminal from './desktop/modules/terminal/Terminal'; // Adjusted path
import Dashboard from './desktop/modules/dashboard/Dashboard'; // Adjusted path
import Tokenomics from './desktop/modules/tokenomics/Tokenomics'; // Adjusted path
import Documents from './desktop/modules/documents/Documents'; // Adjusted path
import Mp3Player from './desktop/modules/mp3player/Mp3Player'; // Adjusted path
import Settings from './desktop/modules/settings/Settings'; // Adjusted path
import LoginPage from './auth/LoginPage/LoginPage'; // Adjusted path

const MainApp = () => {
    return (
        <div className="main-app">
            <nav>
                <Link to="/terminal">Terminal</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/tokenomics">Tokenomics</Link>
                <Link to="/documents">Documents</Link>
                <Link to="/mp3player">MP3 Player</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/terminal" element={<Terminal />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/tokenomics" element={<Tokenomics />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/mp3player" element={<Mp3Player />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/login" element={<LoginPage onLogin={() => window.location.href = '/desktop'} />} />
            </Routes>
        </div>
    );
};

export default MainApp;
