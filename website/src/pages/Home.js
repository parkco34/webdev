import React from 'react';
import MainContent from '../comps/MainContent';
import Background from '../comps/Background';
import TheFooter from '../comps/footer/TheFooter';
import NavBar from '../comps/NavBar.js';
import styles1 from '../cssModules/NavBar.module.css';

function Home() {
    return (
		<div style={{overflow: 'hidden'}}className="backgroundContainer">
            <NavBar theStyle={styles1} up="white" down="black"/>
			<Background />
			<MainContent />
            <TheFooter />
		</div>
    );
}

export default Home;

