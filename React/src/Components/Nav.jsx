import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav() {
    const [active, setActive] = useState('home');

    const handleNavClick = (nav) => {
        setActive(nav);
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '1rem',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: 1,
        }}>
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    color: active === 'home' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'home' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('home')}
            >
                Home
            </Link>
            <Link
                to="/counter"
                style={{
                    textDecoration: 'none',
                    color: active === 'counter' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'counter' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('counter')}
            >
                Counter
            </Link>
            <Link
                to="/todo"
                style={{
                    textDecoration: 'none',
                    color: active === 'todo' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'todo' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('todo')}
            >
                Todo
            </Link>
            <Link
                to="/show-hide"
                style={{
                    textDecoration: 'none',
                    color: active === 'show-hide' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'show-hide' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('show-hide')}
            >
                Show/Hide
            </Link>
            <Link
                to="/character-count"
                style={{
                    textDecoration: 'none',
                    color: active === 'character-count' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'character-count' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('character-count')}
            >
                Character Count
            </Link>
            <Link
                to="/search"
                style={{
                    textDecoration: 'none',
                    color: active === 'search' ? '#fff' : '#ccc',
                    padding: '1rem',
                    borderRadius: '10px',
                    backgroundColor: active === 'search' ? '#444' : 'transparent',
                    transition: 'all 0.3s ease',
                    flex: 1,
                    textAlign: 'center',
                }}
                onClick={() => handleNavClick('search')}
            >
                Live Search
            </Link>

        </nav>
    );
}

export default Nav;