import React from 'react';
import MainContent from '../comps/MainContent';
import Background from '../comps/Background';

function Home() {
    return (
		<div className="backgroundContainer">
			<Background />
			<MainContent />
		</div>
    );
}

export default Home;

