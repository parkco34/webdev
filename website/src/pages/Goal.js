import React, {useState} from 'react';
import theImage from '../myImages/data_book.jpg';
import ResponsiveNav from '../comps/ResponsiveNav.js';
import depression1 from "../myImages/depression1.webp";
import alone from "../images/alone.webp";
import pain from "../images/pain.webp";

const Goal = props => {
    return (
        <div style={{backgroundColor: 'white', color: 'black', width: '100vw', height: '100vh'}}>
            <section className="sxn">
                <ResponsiveNav />
            </section>
            <section>
                <div className="sxn2-container">
                    <img src={pain} alt="NO IMAGE FOUND "/>
                    <img src={alone} alt="NO IMAGE FOUND "/>
                    <img src={depression1} alt="NO IMAGE FOUND "/>
                </div>
            </section>
        </div>
    );
}

export default Goal;
