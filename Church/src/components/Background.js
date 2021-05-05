import React from "react";
import '../cssModules/Background.module.css';
import mainImage from '../Images/cross_fractal.webp';
import mobileImage from '../Images/devil.webp';
import styles from '../cssModules/Background.module.css';
import NavBar from './NavBar';

/* The empty array as a second argument prevents the useEffect hook from running every time the component updates (only when it mounts and unmounts is it run). <---????    */
useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);

const Background = () => {
    const image = window.innerWidth >= 650 ? mainImage : mobileImage;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.theBackground} style={{backgroundImage: `url(${image})`}}>
                <div className={styles.backgroundContainer} >
                    <NavBar />
                </div>
            </div>
        </div>
    );
}

export default Background;
