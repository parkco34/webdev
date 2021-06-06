import React from 'react';
import MainContent from '../comps/MainContent';
import MainBackground from '../comps/MainBackground';
import Carousel from '../mainpage/Carousel2';
import Background from '../comps/Background';
import TheFooter from '../comps/footer/TheFooter';
import NavBar from '../comps/NavBar.js';
import styles1 from '../cssModules/NavBar.module.css';
import theImage from '../myImages/astronaut2.jpg';

function Home() {
    return (
		<div style={{overflow: 'hidden'}}className="backgroundContainer">
            <NavBar theStyle={styles1} up="white" down="black"/>
            <MainBackground image={theImage}/>
			<MainContent />
            <TheFooter />
		</div>
    );
}

export default Home;
