import React from 'react';
import './Navbar.css'
import Logo from '../../images/logo.svg'

const Navbar = () => {
    return (
        <>
        <div className='backgroundBar'></div>
        <div className='navbar'>
            <ul>
                <li><a href='#gallery' className='navLink'>GALLERY</a></li>
                <li><a href='#location' className='navLink'>LOCATION</a></li>
                <li><a href='#top' className='navLink titleLink'>
                    <img src={Logo} alt='Al Pastor Papi Logo' />
                    AL PASTOR PAPI
                    </a></li>
                <li><a href='#menu' className='navLink'>MENU</a></li>
                <li><a href='#news' className='navLink'>NEWS</a></li>
            </ul>
            
        </div>
        </>
    );
};

export default Navbar;