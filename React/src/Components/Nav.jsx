import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [active, setActive] = useState('home');

    const handleNavClick = (nav) => {
        setActive(nav);
    };

    return (
        <nav>
            <Link 
                to="/" 
                className={active === 'home' ? 'active' : ''} 
                onClick={() => handleNavClick('home')}
            >
                Home
            </Link>
            <Link 
                to="/counter" 
                className={active === 'counter' ? 'active' : ''} 
                onClick={() => handleNavClick('counter')}
            >
                Counter
            </Link>
            <Link 
                to="/todo" 
                className={active === 'todo' ? 'active' : ''} 
                onClick={() => handleNavClick('todo')}
            >
                Todo
            </Link>
            <Link 
                to="/show-hide" 
                className={active === 'show-hide' ? 'active' : ''} 
                onClick={() => handleNavClick('show-hide')}
            >
                Show/Hide
            </Link>
        </nav>
    );
};

export default Nav;
