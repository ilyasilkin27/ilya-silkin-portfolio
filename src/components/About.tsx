import React, { useEffect, useState } from 'react';
import '../styles/about.css';

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[index];
            const updatedText = isDeleting
                ? currentText.substring(0, text.length - 1)
                : currentText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }

            setSpeed(isDeleting ? 100 : 200);
        };

        const timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, speed, texts, index]);

    return (
        <span className="typewriter">
            {text}
            <span className="cursor">&nbsp;</span>
        </span>
    );
};

const About: React.FC = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <h3>Ilya Silkin</h3>
            <p>
                <Typewriter texts={['Web Developer', 'Frontend Developer', 'React Developer']} />
            </p>
        </section>
    );
};

export default About;
