import React from 'react';
import MainContent from '../components/MainContent';
import SideMenu from '../components/SideMenu';

function Home() {
    return (
		<div className="background-container">
			<p>Dis be ma Home Page!</p>
			<SideMenu />
			<MainContent />	
		</div>
    );
}

export default Home;

