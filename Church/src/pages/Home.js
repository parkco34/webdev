import React, {Suspense, useState, useEffect} from 'react';
import Navbar from '../components/Navbar.js';
import Background from '../components/Background';
import TheFooter from '../components/footer/TheFooter';
import sky from '../Images/sky2.jpg';
import theImage from '../Images/last_supper.jpg';
import logo from '../Images/ucc-logo.png';
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
        '.fade-to-user': {
            animation: 'fade 0.9s ease-in',
        },
        '@keyframes fade': {
            '0%': {
                opacity: '0',
            }
        }
    }
});

const Main = React.lazy(() => import('../components/Main'));

function Home() {
    const classes = useStyles();
    const [state, setState] = useState('true');

    return (
		<div className={classes.root}>
            <div>
                <Navbar hintColor="transparent" fontcolor="white" scrollingFontColor="white" logo={logo}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Main />
                </Suspense>
            </div>
            <div className="footer">
                <TheFooter />
            </div>
		</div>
    );
}

export default Home;

