import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <LanguageSwitcher />
            <About />
            <Projects />
        </div>
    );
};

export default App;
