import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = ({ user, setUser }) => {
    const handleLogout = async () => {
        await axios.get('/api/logout');
        setUser(null);
    };

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Invoice Manager</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {user ? (
                        <>
                            <li>Hello, {user.name}</li>
                            <li><a href="#" onClick={handleLogout}>Logout</a></li>
                        </>
                    ) : (
                        <li><a href="/auth/google">Login with Google</a></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
