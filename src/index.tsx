import React from 'react';
import ReactDOM from 'react-dom/client'; // Импортируем createRoot из react-dom/client
import App from './App';
import './styles/main.css';
import './i18n'; // Импортируем i18n

// Добавляем класс dark к body при загрузке страницы
document.body.classList.add('dark');

// Создаем root элемент и рендерим приложение
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
