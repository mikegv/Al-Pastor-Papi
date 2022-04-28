import React from 'react';
import './Hero.css'
import HeroImage from '../../images/papi2.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={HeroImage} alt='papi truck' />
        </div>
    );
};

export default Hero;