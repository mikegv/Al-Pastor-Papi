import React from 'react';
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';
import GalleryImage1 from '../../images/gallery-image-1.svg'
import GalleryImage2 from '../../images/gallery-image-2.svg'
import GalleryImage3 from '../../images/gallery-image-3.svg'
import GalleryImage4 from '../../images/gallery-image-4.svg'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
    return (
        <div className='gallery' id="gallery">
            <h1 className='sectionTitle'>Gallery</h1>
            <Carousel infiniteLoop={true} width={'1130px'}>
                <div className='papislide'>
                    <div className='slideImage'><img src={GalleryImage1} /></div>
                    <div className='slideImage'><img src={GalleryImage2} /></div>
                    <div className='slideImage'><img src={GalleryImage3} /></div>
                </div>
                <div className='papislide'>
                    <div className='slideImage'><img src={GalleryImage4} /></div>
                    <div className='slideImage'><img src={GalleryImage3} /></div>
                    <div className='slideImage'><img src={GalleryImage2} /></div>
                </div>
                <div className='papislide'>
                    <div className='slideImage'><img src={GalleryImage2} /></div>
                    <div className='slideImage'><img src={GalleryImage4} /></div>
                    <div className='slideImage'><img src={GalleryImage3} /></div>
                </div>
            </Carousel>
        </div>
    );
};

export default Gallery;