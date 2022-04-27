import React from 'react';
import './Newsstorycard.css'
import newsImage1 from '../../images/news-image-1.svg'

const Newsstorycard = () => {
    return (
        <div className='newsstorycard'>
            <img src={newsImage1} alt='news story image' />
            <h3>San Francisco Chronicle</h3>
            <p className='storydescription'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Sollicitudin interdum habitant
                aenean pulvinar enim
            </p>
            <p className='keepreading'>Keep Reading...</p>
        </div>
    );
};

export default Newsstorycard;