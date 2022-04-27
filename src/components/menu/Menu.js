import React from 'react';
import './Menu.css'
import MenuImage from '../../images/menu.svg'

const Menu = () => {
    return (
        <div className='menu' id='menu'>
            <h1 className='sectionTitle'>MENU</h1>
            <img src={MenuImage} alt='Al Pastor Papi Menu' className='menuImage' />
        </div>
    );
};

export default Menu;