import React from 'react';
import ResponsiveNav from '../components/ResponsiveNav.js';
import MainContent from '../components/MainContent';
import MainBackground from '../components/MainBackground';
import Carousel from '../mainpage/Carousel2';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import styles1 from '../cssModules/NavBar.module.css';
import theImage from '../Images/astronaut2.jpg';
import melogo1 from '../Images/logo2.jpg';

//<NavBar theStyle={styles1} up="white" down="black"/>

function Home() {
    return (
		<div style={{overflow: 'hidden'}} className="backgroundContainer">
            <ResponsiveNav hintColor="black" fontColor="white" scrollingFontColor="white" logo={melogo1}/>
            <MainBackground image={theImage}/>
			<MainContent />
            <TheFooter />
		</div>
    );
}

export default Home;

