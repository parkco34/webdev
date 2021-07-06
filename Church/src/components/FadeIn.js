import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

const FadeInAnimation = ({children, wrapperElement = 'div', direction = null, props, ...prevProps}) => {
	const Component = wrapperElement;
	const compRef = useRef(null);
	const distance = 200;
	const delay = 0;
	let fadeDirection;

	switch(direction) {
		case "left":
			fadeDirection = {x: -distance};
			break;
		case "right":
			fadeDirection = {x: distance};
			break;
		case "up":
			fadeDirection = {y: distance};
			break;
		case "down":
			fadeDirection = {y: -distance};
			break;
		default:
			fadeDirection = {x: 0 };
	}

	useEffect(() => {
		gsap.from(compRef.current, 1, {
			...fadeDirection,
			opacity: 0,
			delay
		});
	}, [compRef, fadeDirection, delay]);

	return (
		<Component ref={compRef} {...prevProps}>
			{children}
		</Component>
	);
};

export default FadeInAnimation;
