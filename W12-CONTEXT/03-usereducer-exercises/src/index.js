import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Theme from './components/Theme';
import Todo from './components/Todo';
import ThemeProvider from './contexts/ThemeContext';
import {TodoProvider} from './contexts/TodoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TodoProvider>
        <Todo />
    </TodoProvider>
)