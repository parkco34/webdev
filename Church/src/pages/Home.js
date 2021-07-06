import React, {Suspense, useState, useEffect} from 'react';
import Navbar from '../components/Navbar.js';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import Main from '../components/Main';
import sky from '../Images/sky2.jpg';
import theImage from '../Images/last_supper.jpg';
import logo from '../Images/ucc-logo.png';
import {makeStyles} from '@material-ui/core/styles';
import FadeInAnimation from '../components/FadeIn';

const useStyles = makeStyles({
    root: {
        overflow: 'hidden',
        backgroundImage: `url(${theImage})`,
        backgroundPosition: '50% 75%',
        height: '100vh',
		width: '100vw',
        display: 'flex',
        position: 'relative',

        '& .footer': {
            display: 'flex',
            position: 'absolute',
            left: '0',
            bottom: '0',
            right: '0',
            backgroundColor: 'black',
        },
        '.fade-to-user': {
            animation: 'fade 0.9s ease-in',
        },
    }
});

function Home() {
    const classes = useStyles();

    return (
		<div className={classes.root}>
			<FadeInAnimation direction="down">
                <Navbar hintColor="transparent" fontcolor="white" scrollingFontColor="white" logo={logo}/>
			</FadeInAnimation>
			<FadeInAnimation>
				<Main />
			</FadeInAnimation>
			<FadeInAnimation direction="up" className="footer">
				<TheFooter />
			</FadeInAnimation>
		</div>
    );
}

export default Home;

