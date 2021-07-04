import React from 'react';
import Navbar from '../components/Navbar.js';
import MainContent from '../components/MainContent';
import MainBackground from '../components/MainBackground';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import sky from '../Images/sky2.jpg';
import theImage from '../Images/church2.jpg';

function Home() {
    return (
		<div style={{overflow: 'hidden', backgroundImage: `url(${sky})`}} className="backgroundContainer">
            <Navbar hintColor="transparent" fontcolor="black" scrollingFontColor="black"/>
            <MainBackground image={theImage}/>
			<MainContent />
            <TheFooter />
		</div>
    );
}

export default Home;

