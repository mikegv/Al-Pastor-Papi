import React, { useState } from 'react';
import './Collapsible.css'
import Newsstorycard from '../newsstorycard/Newsstorycard'
import DownArrowImage from '../../images/arrow-down.svg'

const Collapsible = () => {
    const [collapsed, setCollapsed] = useState(true)
    const clickHandler = () => setCollapsed(() => !collapsed)
    let collapsetestClass = collapsed ? 'collapsableArea' : 'collapsableArea showCollapsableArea'
    let collapseButtonClass = collapsed ? 'openButton' : 'openButton closeButton'
    return (
        <div>
            <div className='topOfCollapsible'>
            <Newsstorycard />
            <Newsstorycard />
            <Newsstorycard />
            </div>
            <button className={collapseButtonClass} onClick={clickHandler}>
            <img src={DownArrowImage}  alt='open collapse button' />
            </button>
            <div className={collapsetestClass}>
            <Newsstorycard />
            <Newsstorycard />
            <Newsstorycard />

            <Newsstorycard />
            <Newsstorycard />
            <Newsstorycard />
            </div>

        </div>
    );
};

export default Collapsible;