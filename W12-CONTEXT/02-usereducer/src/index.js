import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterProvider from './components/CounterContext'
import EshopProvider from './components/EshopContext';
import HomePage from './components/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <EshopProvider>
        <HomePage />
    </EshopProvider>
)