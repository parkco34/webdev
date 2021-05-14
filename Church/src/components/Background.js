import React, {useEffect, useState} from "react";
import '../cssModules/Background.module.css';
import mainImage from '../Images/cross_fractal.webp';
import mobileImage from '../Images/devil.webp';
import styles from '../cssModules/Background.module.css';
import NavBar from './NavBar';


const Background = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    /* The empty array as a second argument prevents the useEffect hook from running every time the component updates (only when it mounts and unmounts is it run). <---????    */
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);

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
