import React from 'react';
import styles1 from '../cssModules/NavBar.module.css';
import Carousel from '../mainpage/Carousel2.js';
import ResponsiveNav from '../components/ResponsiveNav';
import melogo2 from '../Images/logo22.jpg';

function About() {
    return (
		<div style={{backgroundColor: 'white', color: 'black', height: '100vh'}}>
            <ResponsiveNav hintColor="white" fontColor="black" logo={melogo2}/>
			<div className="main-container">
                <Carousel />
            </div>
		</div>
	);
}

export default About;


