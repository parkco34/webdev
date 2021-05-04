import React from "react";
import '../cssModules/Background.module.css';
import mainImage from '../Images/cross_fractal.webp';
import mobileImage from '../Images/devil.webp';
import styles from '../cssModules/Background.module.css';
import NavBar from './NavBar';

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
