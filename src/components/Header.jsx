import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';


const Header = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useAuth();

    const logoutClick = () => {
        navigate('/login');
    };

    return (
        <div className="header bg-slate-700 text-white py-4 px-8 flex justify-between items-center">
            <div>
                <Link id="header-logo" to="/">Ai TechHub</Link>
            </div>
            <div className="links--wrapper">
                {user ? (
                    <>
                        <Link to="/" className="header--link mr-4">Home</Link>
                        <Link to="/profile" className="header--link mr-4">Profile</Link>

                        <button onClick={logoutUser} className="btn mr-4">Logout</button>
                    </>
                ) : (
                    <Link className="btn mr-4" to="/login">Login</Link>
                )}
            </div>
            
        </div>
    );
};

export default Header;
