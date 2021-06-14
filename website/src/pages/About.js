//import React from 'react';
//import Carousel from '../mainpage/Carousel2.js';
//import ResponsiveNav from '../components/ResponsiveNav';
//import melogo2 from '../Images/logo22.jpg';
//
//function About() {
//    return (
//		<div style={{backgroundColor: 'white', color: 'black', height: '100vh'}}>
//            <ResponsiveNav hintColor="white" fontcolor="black" logo={melogo2}/>
//			<div className="main-container">
//                <Carousel />
//            </div>
//		</div>
//	);
//}
//
//export default About;
//

import React from 'react';
import ExperimentationPage from './ExperimentationPage';
import ResponsiveNav from '../comps/ResponsiveNav';
import melogo2 from '../myImages/logo22.jpg';

function About() {
    return (
		<div style={{backgroundColor: 'white', color: 'black', height: '100vh'}}>
            <ResponsiveNav hintColor="white" fontcolor="black" logo={melogo2}/>
			<div className="main-container">
				<ExperimentationPage />
            </div>
		</div>
	);
}

export default About;

