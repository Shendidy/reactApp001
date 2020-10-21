import React, { useEffect, useState } from 'react';
import './style.css';
import './Link';
import Link from './Link';

const Header = () => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    useEffect(() => {
        const onLocationChange = () => {setCurrentPath(window.location.pathname);}

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, [currentPath]);
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className={`item${currentPath === '/' ? ' bold' : ''}`}>
                Home
            </Link>
            <Link href="/hello" className={`item${currentPath === '/hello' ? ' bold' : ''}`}>
                Hello
            </Link>
            <Link href="/about" className={`item${currentPath === '/about' ? ' bold' : ''}`}>
                About
            </Link>
            <Link href="/contact" className={`item${currentPath === '/contact' ? ' bold' : ''}`}>
                Contact
            </Link>
        </div>
    )
};

export default Header;