import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import './styles/main.css';
import './styles/light.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <About />
            <Projects />
        </div>
    );
};

export default App;
