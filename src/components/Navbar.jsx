import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">FinanceApp</h1>
                <div>
                    <Link to="/" className="px-4">Dashboard</Link>
                    <Link to="/about" className="px-4">About</Link>
                    <Link to="/login" className="px-4">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;