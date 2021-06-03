import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		overflow: 'hidden',

		'& .inner': {
			whiteSpace: 'nowrap',
			transition: 'transform 0.3s',
		},
		'& .carousel-item': {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh',
			backgroundColor: 'green',
			color: 'white',
		},
		'& .indicators': {
			display: 'flex',
			justifyContent: 'center',
		},
		'& .indicators > button': {
			margin: '5px',
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

	const updateIndex = newIndex => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		}
		else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}

		setActiveIndex(newIndex);
	}

	return (
		<div className={classes.root}>
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
					<button onClick={()=>{updateIndex(activeIndex + 1);}}>
						NEXT
					</button>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
