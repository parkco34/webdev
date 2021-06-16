import React from 'react';
import ParallaxWrapper from '../components/ParallaxWrapper';
import image1 from '../Images/misc1.jpg';

const styles = {
	obj: {
		margin: '0',
		padding: '0',
		height: '200px',
		width: '200px',
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		borderRadius:'50%',
		backgroundColor: '#0083FF',
		boxShadow: '0px 0px 20px 10px #00833FF',
	},
}

function ExperimentationPage() {
	const FirstOrb = ParallaxWrapper(<div style={styles.obj}></div>, 0.05);
	const SecondOrb = ParallaxWrapper(<div style={{ ...styles.obj, top: '70%', left: '80%', backgroundColor: 'red' }}></div>, 0.02)

	return (
		<div>
			<img src={image1} alt="No Image to be Found" />
			<FirstOrb />
			<SecondOrb />
		</div>
	);
}

export default ExperimentationPage;

