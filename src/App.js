import React from 'react';
import Home from './components/Home';
import Hello from './components/Hello';
import About from './components/About';
import Contact from './components/Contact';
import Route from './components/Route';
import Header from './components/Header';

const App = () => {
    return (
        <div>
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/hello">
                <Hello />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </div>
    )
}

export default App;