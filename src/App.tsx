import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from './app/router';
import './stylesheet/App.css';
import Explore from './app/page/explore';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Router />} />
            <Route path="explore" element={<Explore />} />
        </Routes>
    );
}

export default App;
