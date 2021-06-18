import React, {useEffect, useRef} from 'react';
import {animated, useSpring} from 'react-spring';

const calc = o => `translateY(${o * -0.3}px)`;

const Comp = () => {
	const ref = useRef();
	const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

	const handleScroll = () => {
		const posY = ref.current.getBoundingClientRect().top;
		const offset = window.pageYOffset - posY;
		set({offset});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	return (
		<div ref={ref}>
			<div 
				style={{
					background: '#123456',
					position: 'relative',
					width: '100vw',
					height: '400px',
				}}
			>
				<animated.div
					style={{
						background: '#654321',
						position: 'absolute',
						width: '100vw',
						height: '100px',
						transform: offset.interpolate(calc)
					}}
				/>
			</div>
			<div style={{width: '100%', height: '1000px'}} >
				hello hello hello hello hello hello 
			</div>
		</div>
	);
}

export default Comp;
