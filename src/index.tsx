import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css';
import './i18n'; // Импортируем i18n

// Добавляем класс dark к body при загрузке страницы
document.body.classList.add('dark');

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
