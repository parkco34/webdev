import React from 'react';
import {Parallax, Background} from 'react-parallax';
import image1 from '../Images/cyber_city2.jpg';
import image2 from '../Images/logo1.jpg';
import MandroidBB from './MandroidBB.css';

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const ParallaxThing = () => {
	return (
		<div>
			<Parallax bgImage={image2} strength={600}>
				<Background className="custom-bg">
					<div style={{height: '200', width: '200', backgroundImage: 'url(`${image1}`)'}} />
				</Background>
			</Parallax>
		</div>
	);
}

export default ParallaxThing;
