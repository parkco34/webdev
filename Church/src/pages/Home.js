import React from 'react';
import MainContent from '../components/MainContent';
import Background from '../components/Background';

function Home() {
    return (
		<div className="backgroundContainer">
			<Background />
			<MainContent />
		</div>
    );
}

export default Home;
