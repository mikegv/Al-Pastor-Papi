import React from 'react';
import './Location.css'
import MapImage from '../../images/map.svg'

const Location = () => {
    return (
        <div className='location' id='location'>
            <h1 className='sectionTitle'>Location</h1>
            
            <div  style={{width: '1116px',margin: 'auto'}}>
                <a href='#'>
            <img src={MapImage} alt="map sf" />
                <p className='locationContainer'>We are always moving, check our instagram for new locations!</p>
                </a>
                </div>
        </div>
    );
};

export default Location;