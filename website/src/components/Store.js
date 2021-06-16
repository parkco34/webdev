import React, {useState, useEffect} from 'react';
import ResponsiveNav from '../components/ResponsiveNav';
import {makeStyles} from '@material-ui/core/styles';
import ThePaper from '../components/ThePaper';
import MandroidBB from '../components/MandroidBB.css';
import logo from '../Images/logo22.jpg';
import headerImg from '../Images/career.jpg';
import {Parallax, Background} from 'react-parallax';
import img1 from '../Images/concept1.jpg';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',

		'& .sub-header': {

		},

		'& .container': {
			width: '100vw',
			height: '100vh',
		},
		'& .img-container': {
			width: 'inherit',
			height: 'inherit',
		},
		'& .da-img': {
			width: 'inherit',
			height: 'inherit',
			zIndex: '-1',
			top: '0',
		},
		'& .paper-container': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
		},
		'& .paper-item': {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
	},
});

const Store = props => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<header >
				<ResponsiveNav hintColor="transparent" fontcolor="black" scrollingFontColor="black" logo={logo} />
				<div className="container">
					<div className="img-container">
						<img src={headerImg} className="da-img" alt="NO IMAGE FOUND!" />
					</div>
					<div className="something">
						/*API STUFF GOES HERE (stuff for customer to look up)*/
					</div>
				</div>
			</header>

			<section className="sxn">
				<header className="header-container">
					<div className="sub-header">
					</div>
				</header>

				<Parallax 
					blur={0}
					bgImage={img1}
					strength={1300}
					renderLayer={percentage => (
						<div className="paper-container">
							<div className="paper-item l1">
								<ThePaper />
								<ThePaper />
								<ThePaper />
							</div>
							
							<div className="paper-item l2">
								<ThePaper />
							</div>

							<div className="paper-item l3">
								<ThePaper />
							</div>

							<div className="paper-item l4">
								<ThePaper />
							</div>
						</div>
					)}
				>
				</Parallax>

				<div className="sub-container">
				</div>
			</section>	
		</div>
	);
}

export default Store;
