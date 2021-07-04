import React from 'react';
import Navbar from '../components/Navbar.js';
import Main from '../components/Main';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import sky from '../Images/sky2.jpg';
import theImage from '../Images/last_supper.jpg';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        overflow: 'hidden',
        backgroundImage: `url(${theImage})`,
        backgroundPosition: '50% 75%',
        height: '100vh',
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
    }
});

function Home() {
    const classes = useStyles();

    return (
		<div className={classes.root}>
            <div>
                <Navbar hintColor="transparent" fontcolor="white" scrollingFontColor="white"/>
                <Main />
            </div>
            <div className="footer">
                <TheFooter />
            </div>
		</div>
    );
}

export default Home;

