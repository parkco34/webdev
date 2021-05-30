import React, {Component, useState, uesEffect} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import img1 from '../myImages/subImages/joinus1.jpg';
import img2 from '../myImages/subImages/joinus2.jpg';

const styles = makeStyles({
	root2: {
		'& #background-image': {
			display: 'flex',
			flexDirection: 'column',
			width: '100vw',
			height: 'auto',
			overflow: 'hidden',
			backgroundSize: 'cover',
			minHeight: '100%',
			minWidth: '1024px',
			position: 'fixed',
			top: '0',
			left: '0',
		},
		'& .image-container': {
			position: 'fixed',
			top: '-50%',
			left: '-50%',
			width: '200%',
			height: '200%'
		},
		'& .image-container img': {
			position: 'absolute',
			top: '0',
			left: '0',
			right: '0',
			bottom: '0',
			margin: 'auto',
			minWidth: '50%',
			minHeight: '50%',
		},
	},
});

const useStyles = theme => ({
	root: {
		'& .background-image-container': {
			overlfow: 'hidden',
		},
	}
});

class Background2 extends Component {
	constructor(props) {
		super(props);

	};

	render() {
		const {classes} = this.props;

		return (
			<div>
				<div className={classes.root}>
					<div className="background-image-container">
						<BackgroundImage image={img1} otherImage={img2} id="the-image"/>
					</div>
				</div>
			</div>
		);
	}
}

const BackgroundImage = props => {
	const classy = styles();
	const [image, setImage] = useState(null);
	const [otherImage, setOtherImage] = useState(null);

	return (
		<div className={classy.root2}>
			<div className="image-container">
				<img src={props.image} alt={props.otherImage} id="background-image"/>
			</div>
		</div>
	);
}

export default withStyles(useStyles)(Background2);

