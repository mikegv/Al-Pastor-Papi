import './Footer.css'
import React from 'react';
import InstaLogo from '../../images/instagram-logo.svg'
import TwitterLogo from '../../images/twitter-logo.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Email INFO@ALPASTORPAPI.COM FOR CATERING INQUIRIES </p>
            <div>
            <img src={InstaLogo} alt='Instagram logo link' />
            <img src={TwitterLogo} alt='Twitter logo link' />
            </div>
        </div>
    );
};

export default Footer;