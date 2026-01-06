import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from './app/router';
import './stylesheet/App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Router />} />
        </Routes>
    );
}

export default App;
