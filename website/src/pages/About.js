import React from 'react';
import styles1 from '../cssModules/NavBar.module.css';
import Carousel from '../mainpage/Carousel2.js';
import ResponsiveNav from '..comps/ResponsiveNav';

function About() {
    return (
		<div style={{backgroundColor: 'white', color: 'black', height: '100vh'}}>
            <ResponsiveNav />
			<div className="main-container">
                <Carousel />
            </div>
		</div>
	);
}

export default About;



