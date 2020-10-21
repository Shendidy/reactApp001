import React from 'react';
import Home from './components/Home';
import Hello from './components/Hello';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    const showHome = () => {
        if(window.location.pathname === '/') return <Home />
    }

    const showHello = () => {
        if(window.location.pathname === '/hello') return <Hello />
    }

    const showAbout = () => {
        if(window.location.pathname === '/about') return <About />
    }

    const showContact = () => {
        if(window.location.pathname === '/contact') return <Contact />
    }

    return (
        <div>
            {showHome()}
            {showHello()}
            {showAbout()}
            {showContact()}
        </div>
    )
}

export default App;