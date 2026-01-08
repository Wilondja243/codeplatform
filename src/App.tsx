import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import { queryClient } from './hooks/use-query';
import Router from './app/router';

import './stylesheet/App.css';
import './stylesheet/style.css';
import './stylesheet/form.css';

import Explore from './app/page/explore';
import PathCourse from './app/page/course-path';
import FromZero from './app/page/from-zero';
import Formation from './app/page/learning-center';
import Register from './app/auth/register';
import LoginForm from './app/auth/login';

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <ToastContainer position="top-right" autoClose={3000} />

                <Routes>
                    <Route path="/" element={<Router />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/start/:id" element={<FromZero />} />
                    <Route path="/apprentissage/:id" element={<PathCourse />} />
                    <Route path="/formation/:id" element={<Formation />} />

                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
