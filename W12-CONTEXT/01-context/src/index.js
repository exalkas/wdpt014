import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EshopContext from './components/EshopContext';
import HomePage from './components/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EshopContext>
        <HomePage />

    </EshopContext>
)