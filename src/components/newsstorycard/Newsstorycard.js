import React from 'react';
import './Newsstorycard.css'
// import newsImage1 from '../../images/news-image-1.svg'

const Newsstorycard = (props) => {
    return (
        <div className='newsstorycard'>
            <div className='imageContainer'>
            <img src={props.newsImage} alt='news story image' />
            </div>
            <h3>{props.title}</h3>
            <p className='storydescription'>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Sollicitudin interdum habitant
                aenean pulvinar enim
            </p>
            <p className='keepreading'><a href='#' target='_blank'>Keep Reading...</a></p>
        </div>
    );
};

export default Newsstorycard;