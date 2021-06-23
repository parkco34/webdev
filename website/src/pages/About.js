import React from 'react';
import Background from '../components/Background';
import Carousel from '../mainpage/Carousel2.js';
import ResponsiveNav from '../components/ResponsiveNav';
import melogo2 from '../Images/logo22.jpg';

function About() {

    return (
		<div >
            <ResponsiveNav hintColor="transparent" fontcolor="white" logo={melogo2}/>
			<div className="main-container">
				<Background />
            </div>
		</div>
	);
}

export default About;
