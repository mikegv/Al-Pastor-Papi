import React from 'react';
import './Location.css'
import MapImage from '../../images/map.svg'
import LocationInstaImage from '../../images/location-instagram.svg'

const Location = () => {
    return (
        <div className='location' id='location'>
            <h1 className='sectionTitle'>Location</h1>
            
            <div  style={{width: '1116px',margin: 'auto'}}>
                <a href='#'>
            <img src={LocationInstaImage} alt="map sf" style={{width: '1116px'}} />
                <p className='locationContainer'>We are always moving, check our instagram for new locations!</p>
                </a>
                </div>
        </div>
    );
};

export default Location;