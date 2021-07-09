import React, {Suspense, useState, useEffect} from 'react';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import Main from '../components/Main';
import sky from '../Images/sky2.jpg';
import theImage from '../Images/last_supper0.JPG';
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

		'& .home-fade': {
			height: '0',
			width: '0',
		},
		'& .odd-div': {
				position: 'absolute',
				margin: '300px 0 500px 600px',
				height: '200px',
				width: '500px',
				color: 'white',
				fontFamily: 'Lucida Console',
				fontWeight: 'bold',
		}
    }
});

function Home() {
    const classes = useStyles();
	const [windowDimension, setWindowDimension] = useState(window.innerWidth);

	useEffect(() => {
		function handleWindow() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener('resize', handleWindow);
		return () => window.removeEventListener('resize', handleWindow);
	}, [])

    return (
		<div className={classes.root}>
			<FadeInAnimation direction="down" className="home-fade tp">
			</FadeInAnimation>
			<FadeInAnimation >
				<Main className="the-main"/>
			</FadeInAnimation>
			<div className="odd-div">
				<p className="texty">{`Window Width = ${windowDimension}`}</p>
			</div>
			<FadeInAnimation direction="up" className="home-footer" >
				<TheFooter />
			</FadeInAnimation>
		</div>
    );
}

export default Home;


