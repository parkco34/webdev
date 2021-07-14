import React, {useState, useEffect} from 'react';
import FlexBox from '../components/FlexBox';
import Footer from '../footer/Footer';
import Test from '../components/Test';

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
			<div className="something" style={{textAlign: 'center', width: '400px', margin: '300px 0 0 800px ', fontWeight: 'bold', fontSize: '34px', fontFamily: 'Lucida Console', color: 'limegreen', backgroundColor: 'black'}} >
				<p style={{color: "red", position: "absolute", right: "50%", bottom: "450px"}} className="paragraph">{`Window size = ${win}`}</p>
			</div>
			<FlexBox />
			<div>
				<Footer />
			</div>
		</div>
    );
}

export default About

