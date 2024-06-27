import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/main.css';
import './styles/light.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <About />
            <Projects />
        </div>
    );
};

export default App;
