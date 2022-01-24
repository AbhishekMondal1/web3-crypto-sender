import React from 'react'
import logo from '../../images/logo.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container gradient-bg-footer'>
            <div className='footer-top-wrapper'>
                <div className='footer-logo-wrapper'>
                    <img src={logo} alt="logo" className='footer-logo' />
                </div>
                <div className='footer-links-wrapper'>
                    <p className='footer-link '>Market</p>
                    <p className='footer-link'>Exchange</p>
                    <p className='footer-link'>Tutorials</p>
                    <p className='footer-link'>Wallets</p>
                </div>
            </div>
            <div className='footer-contact-wrapper'>
                <p className='footer-contact'>Come join us</p>
                <p className='footer-contact'>info@cryptoloaded.com</p>
            </div>
            <div className='separator' />
            <div className='footer-copyright-wrapper'>
                <p className='footer-copyright'>@ Cryptoloaded 2022</p>
                <p className='footer-copyright'>All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
