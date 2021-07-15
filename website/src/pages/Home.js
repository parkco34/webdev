import React from 'react';
import NavigationBar from '../comps/NavigationBar';
import MainContent from '../comps/MainContent';
import MainBackground from '../comps/MainBackground';
import Carousel from '../mainpage/Carousel2';
import Background from '../comps/Background';
import TheFooter from '../comps/footer/TheFooter';
import styles1 from '../cssModules/NavBar.module.css';
import theImage from '../myImages/astronaut2.jpg';
import melogo1 from '../myImages/logo2.jpg';

//<NavBar theStyle={styles1} up="white" down="black"/>

function Home() {
    return (
		<div style={{overflow: 'hidden'}} className="backgroundContainer">
            <NavigationBar Color="grey" Slider="grey"/>
            <MainBackground image={theImage}/>
			<MainContent />
            <TheFooter />
		</div>
    );
}

export default Home;
