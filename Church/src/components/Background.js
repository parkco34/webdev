import React from "react";
import '../cssModules/Background.module.css';
import mainImage from '../Images/farmcountry.jpg';
import subImage from '../Images/ancientchurch1.png';
import mobileImage from '../Images/devil.webp';
import styles from '../cssModules/Background.module.css';

const Background = () => {
    const image = window.innerWidth >= 650 ? subImage : mobileImage;

    return (
        <div className={styles.theBackground} style={{backgroundImage: `url(${mainImage})`}}>
            <div className={styles.backgroundContainer} style={{backgroundImage: `url(${image})`}}>
            </div>
        </div>
    );
}

export default Background;
