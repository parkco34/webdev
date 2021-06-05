import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useSwipeable} from 'react-swipeable';
import MandroidBb from '../comps/MandroidBB.css';
import NavBar from '../comps/NavBar';
import styles1 from '../cssModules/NavBar.module.css';

const useStyles = makeStyles({
	root: {
		overflow: 'hidden',
		fontFamily: 'MandroidBB',

		'& .inner': {
			whiteSpace: 'nowrap',
			transition: 'transform 0.3s',
		},
		'& .carousel-item': {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
			color: 'white',
		},
		'& .indicators': {
			display: 'flex',
			justifyContent: 'center',
		},
		'& .indicators > button': {
			margin: '5px',
			fontFamily: 'MandroidBB',
		},
		'& .indicators > button.active': {
			backgroundColor: 'green',
			color: 'white',
			fontWeight: 'bold',
		},
	},
});

export const CarouselItem = ({children, width}) => {
	return (
		<div className="carousel-item" style={{width: width}}>
			{children}
		</div>
	);
};

const Carousel = ({children}) => {
	const classes = useStyles();
	const [activeIndex, setActiveIndex] = useState(0);
	const [paused, setPaused] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			if (!paused) {
				updateIndex(activeIndex + 1);
			}
		}, 10000);

		return () => {
			if (interval) {
				clearInterval(interval);
                console.log(paused, " ", interval);
			}
		}
	});

	const updateIndex = newIndex => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		}
		else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	}

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1)
	});

	return (
		<div
			{...handlers}
			className={classes.root}
			onMouseEnter={()=>setPaused(true)}
			onMouseLeave={()=>setPaused(false)}
		>
        <NavBar theStyle={styles1} up="white" down="black" />
			<div>
				<div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
					{React.Children.map(children, (child, index) => {
						return React.cloneElement(child, {width: "100%"});
					})}
				</div>

				<div className="indicators">
					<button onClick={()=>{updateIndex(activeIndex - 1);}}>
						PREV
					</button>
						{React.Children.map(children, (child, index) => {
							return (
								<button
									className={`${index === activeIndex ? "active" : ""}`}
									onClick={()=>updateIndex(index)}
								>
									{index + 1}
								</button>
							);
						})}
					<button onClick={()=>{updateIndex(activeIndex + 1);}}>
						NEXT
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;

