import React from 'react';
import NavBar from '../comps/NavBar';
import styles1 from '../cssModules/NavBar.module.css';
import Carousel from '../mainpage/Carousel2.js';

function About() {
    return (
		<div >
			<NavBar theStyle={styles1} up="white" down="black"/>
			<div className="main-container">
                <Carousel />
            </div>
		</div>
	);
}

export default About;


