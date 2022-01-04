import React, { useState } from 'react';
import './navbar.css';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`menubar-list ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className='navbar-main'>
            <div className='logo-wrapper'>
                <img src={logo} className='logo' />
            </div>
            <ul className='navbar-list'>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className='navbar-login-btn'>
                    Login
                </li>
            </ul>
            <div className='menubar-container'>
                {toggleMenu
                    ? <AiOutlineClose fontSize={28} className='menu-icon' onClick={() => setToggleMenu(false)} />
                    : <HiMenuAlt4 fontSize={28} className='menu-icon' onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                    className='menubar-list-wrapper blue-glassmorphism animate-slide-in'>
                        <li className='menubar-list-icon'>
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps='menubar-lists'/>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar
