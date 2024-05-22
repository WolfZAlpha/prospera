import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage/LoginPage';
import MainApp from './components/MainApp';
import PreLoader from './components/Pre-Loader/PreLoader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [preloaderComplete, setPreloaderComplete] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handlePreloaderFinish = () => {
        setPreloaderComplete(true);
    };

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                {!preloaderComplete && <Route path="*" element={<PreLoader onComplete={handlePreloaderFinish} />} />}
                {preloaderComplete && <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />}
                {preloaderComplete && <Route path="/*" element={isAuthenticated ? <MainApp /> : <Navigate to="/login" />} />}
            </Routes>
        </Router>
    );
}

export default App;
