import React, {useState} from 'react';
import theImage from '../myImages/data_book.jpg';
import ResponsiveNav from '../comps/ResponsiveNav.js';

const Goal = props => {
    return (
        <div style={{backgroundColor: 'white', color: 'black', width: '100vw', height: '100vh'}}>
            <ResponsiveNav />
        </div>
    );
}

export default Goal;
