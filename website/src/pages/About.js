import React from 'react';
import NavBar from '../components/NavBar';
import styles1 from '../cssModules/NavBar.module.css';
import Carousel from '../mainpage/Carousel2.js';
import ResponsiveNav from '../components/ResponsiveNav';

//			<NavBar theStyle={styles1} up="white" down="black"/>
//			<div className="main-container">
//                <Carousel />
//            </div>

function About() {
    return (
		<div style={{backgroundColor: 'white', color: 'black', height: '100vh'}}>
			<section className="sxn">
				<ResponsiveNav />
			</section>
		</div>
	);
}

export default About;


