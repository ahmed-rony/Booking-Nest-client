import React, { useContext } from 'react';
import './Navbar.scss';
import { GiNestBirds } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import AuthContext from '../../utilities/ContextAPI/AuthContext';

const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav className='navbar'>
            <div className="container">
                <Link to='/'>
                    <span className='logo'>BOOKING NEST <span><GiNestBirds /></span></span>
                </Link>
                {user
                    ? <div className="nav-item">
                        <button>Logout</button>
                    </div>
                    : <div className="nav-item">
                        <button>Register</button>
                        <button>Login</button>
                    </div>}
            </div>
        </nav>
    );
};

export default Navbar;