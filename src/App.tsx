import React from 'react';
import { ClipLoader } from 'react-spinners';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route } from 'react-router-dom';
import { queryClient } from './hooks/use-query';
import Router from './app/router';

import './stylesheet/App.css';
import './stylesheet/style.css';
import './stylesheet/roadmap.css';
import './stylesheet/form.css';

import Explore from './app/page/explore';
import Roadmap from './app/page/roadmap';
import PathCourse from './app/page/course-path';
import FromZero from './app/page/from-zero';
import Formation from './app/page/learning-center';
import Contact from './app/page/contact';
import Quiz from './app/page/quiz';
import WebDev from './app/page/web-developement';
import WebLearning from './app/page/web-learning';
import PythonCalculator from './features/tempo/challenge';

import Register from './app/auth/register';
import LoginForm from './app/auth/login';

function App() {
    const [isReady, setIsReady] = React.useState(false);

    React.useEffect(() => {
        const handleLoad = () => {
            setIsReady(true);
        };

        if (document.readyState == 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);

            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <div
                className={`${isReady ? 'hidden' : 'flex items-center justify-center h-screen'}`}
            >
                <ClipLoader size={50} />
            </div>

            <div>
                <ToastContainer position="top-right" autoClose={3000} />

                <Routes>
                    <Route path="/" element={<Router />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="roadmap/" element={<Roadmap />} />
                    <Route path="/start/:id" element={<FromZero />} />
                    <Route path="/apprentissage/:id" element={<PathCourse />} />
                    <Route path="/formation/:id" element={<Formation />} />
                    <Route path="/formation/:id/quiz/" element={<Quiz />} />
                    <Route
                        path="/formation/:id/challenge"
                        element={<PythonCalculator />}
                    />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="/start-web/:id" element={<WebDev />} />
                    <Route
                        path="/formation-web/:id"
                        element={<WebLearning />}
                    />

                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </QueryClientProvider>
    );
}

export default App;
