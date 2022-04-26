import React from 'react';
import './Navbar.css'
import Logo from '../../images/logo.svg'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [blur, setBlur] = useState(false)
    const onScroll = () => {
        if(window.scrollY > 100 & blur===false){
          console.log('> 50')
          //add class to navbar to add opacity and css background blur
          setBlur(true)
          console.log('blur')
        }else if(blur===true & window.scrollY < 100){
            setBlur(false)
            console.log('unblur')
        }
      }
    useEffect(
        ()=>{
            window.addEventListener('scroll', onScroll)
            console.log("useffect")
            return () => {
              window.removeEventListener('scroll', onScroll)
            }
        }
    )
    let navbarClass = blur ? 'navbar blur' : 'navbar'
    return (
        <div className={navbarClass}>
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
    );
};

export default Navbar;