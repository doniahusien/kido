import React, { useState } from 'react';
import Logo from './Logo'
import NavLinks from './NavLinks';
import UserActions from './UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/features/auth/authSlice';
const NavBar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogOut = () => dispatch(logout());
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-red-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 sm:px-8">
                <Logo />

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-3 sm:space-x-5 md:space-x-5">
                    <NavLinks user={user} />
                </nav>

                {/* User Actions */}
                <div className='flex space-x-2 sm:space-x-4'>
                <UserActions isAuthenticated={isAuthenticated} handleLogOut={handleLogOut} />

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-red-600 text-white`}>
                <nav className="flex flex-col py-4 px-6 sm:px-8">
                    <NavLinks user={user} isMobile={true} />
                    <UserActions isAuthenticated={isAuthenticated} handleLogOut={handleLogOut} isMobile={true} />
                </nav>
            </div>
        </header>
    );
};

export default NavBar;

