import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from '../comps/NavBar';
import styles1 from '../cssModules/NavBar.module.css';

const useStyles = makeStyles({
	root: {
		'& .main-container': {
		},
	},
});

function About() {
    return (
		<div>
			<NavBar theStyle={styles1} up="white" down="black"/>
			<div className="main-container">

            </div>
		</div>
	);
}

export default About;


