import React from 'react';
import './style.css';
import './Link';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className={`item${window.location.pathname === '/' ? ' bold' : ''}`}>
                Home
            </Link>
            <Link href="/hello" className={`item${window.location.pathname === '/hello' ? ' bold' : ''}`}>
                Hello
            </Link>
            <Link href="/about" className={`item${window.location.pathname === '/about' ? ' bold' : ''}`}>
                About
            </Link>
            <Link href="/contact" className={`item${window.location.pathname === '/contact' ? ' bold' : ''}`}>
                Contact
            </Link>
        </div>
    )
};

export default Header;