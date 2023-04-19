import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Login from './components/Login';
import LoginLayout from './Layouts/LoginLayout'
import Dashboard from './Dashboard';
import MainLayout from './Layouts/MainLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<LoginLayout />}>
                <Route path="/" element={<Login />}/>
            </Route>

            <Route element={<MainLayout />}>
                <Route path="/dashboard" element={<Dashboard />}/>
            </Route>
        </Routes>
    </BrowserRouter>
);
