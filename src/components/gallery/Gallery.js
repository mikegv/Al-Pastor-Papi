import React from 'react';
import './Gallery.css'
import { Carousel } from 'react-responsive-carousel';
import GalleryImage1 from '../../images/gallery-image-1.svg'
import GalleryImage2 from '../../images/gallery-image-2.svg'
import GalleryImage3 from '../../images/gallery-image-3.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
    return (
        <div className='gallery' id="gallery">
            <h1 className='sectionTitle'>Gallery</h1>
            <Carousel infiniteLoop={true} width={'1130px'}>
            <div className='papislide'>
                    <img src={GalleryImage1}/>
                    <p className="legend">Legend 1</p>
                    <img src={GalleryImage2} />
                    <p className="legend">Legend 2</p>
                    <img src={GalleryImage3} />
                    <p className="legend">Legend 2</p>
                   
                </div>
                <div className='papislide'>
                    <img src={GalleryImage1}/>
                    <p className="legend">Legend 1</p>
                    <img src={GalleryImage2} />
                    <p className="legend">Legend 2</p>
                    <img src={GalleryImage3} />
                    <p className="legend">Legend 2</p>
                </div>
                <div className='papislide'>
                    <img src={GalleryImage1}/>
                    <p className="legend">Legend 1</p>
                    <img src={GalleryImage2} />
                    <p className="legend">Legend 2</p>
                    <img src={GalleryImage3} />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Gallery;