import './Footer.css'
import React from 'react';
import InstaLogo from '../../images/instagram-logo.svg'
import TwitterLogo from '../../images/twitter-logo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Email INFO@ALPASTORPAPI.COM FOR CATERING INQUIRIES </p>
            <div>
            <a href='https://www.instagram.com/alpastorpapi415/'><img src={InstaLogo} alt='Instagram logo link' /></a>
            <a href='https://twitter.com/AlPastorPapi415'><img src={TwitterLogo} alt='Twitter logo link' /></a>
            </div>
        </div>
    );
};

export default Footer;