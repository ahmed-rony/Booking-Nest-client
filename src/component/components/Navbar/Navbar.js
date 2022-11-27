import React from 'react';
import './Navbar.scss';
import { GiNestBirds } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <Link to='/'>
                    <span className='logo'>BOOKING NEST <span><GiNestBirds /></span></span>
                </Link>
                <div className="nav-item">
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;