import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';

function Navigation(){
    return (
        <div className="nav-links">
            <Link to="#">Press</Link>
            <Link to="#">Vision</Link>
            <Link to="#">Issues</Link>
            <Link to="#">Store</Link>
            <Link to="#">Join The Team</Link>
        </div>
    )
}

export default Navigation;