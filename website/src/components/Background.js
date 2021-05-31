import React, {useEffect, useState, useRef} from "react";
import mainImage from '../myImages/subImages/2014_2.jpg';
import mainImage2 from '../myImages/subImages/2014_1.jpg';
import mobileImage from '../myImages/devil.webp';
import styles from '../cssModules/Background.module.css';

const Background = () => {
	const [image, setImage] = useState(mainImage);
	const [count, setCount] = useState(0);

    /* The empty array as a second argument prevents the useEffect hook from running every time the component updates (only when it mounts and unmounts is it run). <---????    */
	const useWindowWidth = () => {
		const [windowWidth, setWindowWidth] = useState(window.innerWidth);

		useEffect(() => {
			const handleWindowResize = () => {
				setWindowWidth(window.innerWidth);
			};

			window.addEventListener('resize', handleWindowResize);
			return () => window.removeEventListener('resize', handleWindowResize);
		}, []);

		return windowWidth;
	};

	function useInterval(callback, delay) {
		const savedCallback = useRef();

		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		useEffect(() => {
			function tick() {
				savedCallback.current();
			}

			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		}, [delay]);
	}

	useInterval(() => {
		if ((image !== mainImage2) && (count % 7 === 0)) {
			setImage(mainImage2);
			setCount(count + 1);
		}

		if ((image !== mainImage) && (count % 7 === 0)) {
			setImage(mainImage);
			setCount(count + 1);
		}
		else {
			setCount(count + 1);
		}
	}, 2000);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.theBackground} style={{backgroundImage: `url(${image})`}}>
                <div className={styles.backgroundContainer} >
                </div>
            </div>
        </div>
    );
}

export default Background;


