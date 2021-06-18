import React from 'react';
import Carousel from '../mainpage/Carousel2.js';
import ResponsiveNav from '../comps/ResponsiveNav';
import melogo2 from '../myImages/logo22.jpg';

function About() {
    return (
		<div >
            <ResponsiveNav hintColor="transparent" fontcolor="white" logo={melogo2}/>
			<div className="main-container">
                <Carousel />
            </div>
		</div>
	);
}

export default About;

