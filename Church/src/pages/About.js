import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import logo from '../Images/ucc-logo.png';

function About() {
	const [win, setWin] = useState(window.innerWidth);

	useEffect(() => {	
		function handleWindow() {
			setWin(window.innerWidth);
		}
		
		window.addEventListener('resize', handleWindow);
		return () => window.removeEventListener('resize', handleWindow);
	}, []);

    return (
		<div className="About">
			<Navbar hintColor="transparent" fontColor="black" scrollingFontColor="black" logo={logo} />
			<div className="something" style={{textAlign: 'center', width: '400px', margin: '300px 0 0 800px ', fontWeight: 'bold', fontSize: '34px', fontFamily: 'Lucida Console', color: 'limegreen', backgroundColor: 'black'}} >
				<p className="paragraph">{`Window size = ${win}`}</p>
			</div>
		</div>
    );
}

export default About
