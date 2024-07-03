import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="switchers">
                <LanguageSwitcher />
                <ThemeSwitcher />
            </div>
            <About />
            <Projects />
        </div>
    );
};

export default App;
