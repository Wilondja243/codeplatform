import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from './app/router';
import './stylesheet/App.css';
import './stylesheet/style.css';
import Explore from './app/page/explore';
import Formation from './app/page/formation';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/formation/:id" element={<Formation />} />
        </Routes>
    );
}

export default App;
