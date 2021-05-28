import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';

const useStyles = makeStyles({
	root: {
		'& .main-container': {
			display: 'flex',
			position: 'relative',	
		},
	},
});

function About() {
    return (
		<div>
			<NavBar />
			<div className="main-container">Where is my mind?</div>
		</div>
	);
}

export default About;

