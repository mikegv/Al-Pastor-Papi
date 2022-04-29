import React, { useState } from 'react';
import './Collapsible.css'
import Newsstorycard from '../newsstorycard/Newsstorycard'
import DownArrowImage from '../../images/arrow-down.svg'
import newsImage1 from '../../images/news-image-1.svg'
import newsImage2 from '../../images/news-image-2.svg'
import newsImage3 from '../../images/news-image-3r.png'

const Collapsible = () => {
    const [collapsed, setCollapsed] = useState(true)
    const clickHandler = () => setCollapsed(() => !collapsed)
    let collapsetestClass = collapsed ? 'collapsableArea' : 'collapsableArea showCollapsableArea'
    let collapseButtonClass = collapsed ? 'openButton' : 'openButton closeButton'
    return (
        <div>
            <div className='topOfCollapsible'>
                <Newsstorycard title='San Francisco Chronicle' newsImage={newsImage1} />
                <Newsstorycard title='48 Hills' newsImage={newsImage2} />
                <Newsstorycard title='California Eating' newsImage={newsImage3} />
            </div>
            <button className={collapseButtonClass} onClick={clickHandler}>
                <img src={DownArrowImage} alt='open collapse button' />
            </button>
            <div className={collapsetestClass}>
                <Newsstorycard title='San Francisco Chronicle' newsImage={newsImage1} />
                <Newsstorycard title='48 Hills' newsImage={newsImage2} />
                <Newsstorycard title='California Eating' newsImage={newsImage3} />

                <Newsstorycard title='San Francisco Chronicle' newsImage={newsImage1} />
                <Newsstorycard title='48 Hills' newsImage={newsImage2} />
                <Newsstorycard title='California Eating' newsImage={newsImage3} />
            </div>

        </div>
    );
};

export default Collapsible;