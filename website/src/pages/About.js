import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../comps/NavBar';
import styles2 from '../cssModules/NavBar2.module.css';

const useStyles = makeStyles({
	root: {
		'& .main-container': {
		},
	},
});

function About() {
    return (
		<div>
			<NavBar theStyle={styles2} up="black" down="white"/>
			<div className="main-container">

            </div>
		</div>
	);
}

export default About;


