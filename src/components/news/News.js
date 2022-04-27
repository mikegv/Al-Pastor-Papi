import React from 'react';
import './News.css'
import Collapsible from '../collapsible/Collapsible'

const News = () => {
    return (
        <div className='news' id='news'>
            <h1 className='sectionTitle'>NEWS</h1>
            <Collapsible />
        </div>
    );
};

export default News;