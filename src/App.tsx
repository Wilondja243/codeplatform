import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Router from './app/router';

import './stylesheet/App.css';
import './stylesheet/style.css';
import './stylesheet/form.css';

import Explore from './app/page/explore';
import FromZero from './app/page/from-zero';
import Formation from './app/page/formation';
import Register from './app/auth/register';


function App() {
    return (
        <Routes>
            <Route path="/" element={<Router />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/from-zero/:id" element={<FromZero />} />
            <Route path="/formation/:id" element={<Formation />} />

            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
