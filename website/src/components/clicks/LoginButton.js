import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		'& div': {
			height: '33.33%',
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		'& .box-1': {
			backgroundColor: 'white',
			border: 'solid 1px blue'
		},
		'& .btn': {
			textAlign: 'center',
			lineHeight: '50px',
			height: '50px',
			width: '100px',
			cursor: 'pointer'
		},
		'& .btn-one': {	
			color: 'black',
			transition: 'all 0.3s',
			position: 'relative'
		},
		'& .btn-one span': {
			transition: 'all 0.3s',
		},
		'& .btn-one::before': {
			content: '""',
			position: 'absolute',
			bottom: '0',
			left: '0',
			width: '100%',
			height: '100%',
			zIndex: '1',
			opacity: '0',
			transition: 'all 0.3s',
			borderTopWidth: '1px',
			borderTopStyle: 'solid',
			borderBottomStyle: 'solid',
			borderTopColor: 'blue',
			borderBottomColor: 'blue',
			transform: 'scale(0.1, 1)'
		},
		'& .bt-one:hover span': {
			letterSpacing: '2px',
		},
		'& .btn-one:hover::before': {
			opacity: '1',
			transform: 'scale(1,1)',
		},
		'& .btn-one::after': {
			content: '""',
			position: 'absolute',
			bottom: '0',
			left: '0',
			width: '100%',
			height: '100%',
			zIndex: '1',
			transition: 'all 0.3s',
		},
		'& .btn-one:hover::after': {
			opacity: '0',
			transform: 'scale(0.1, 1)',
			backgroundColor: 'blue',
		},
	},
	
});

const LoginButton = props => {
	const classes = useStyles();
	const [title, setTitle] = useState(props);

	return (
		<div className={classes.root}>
			<div className="box-1">
				<div className="btn btn-one">
					<span>{props.title}</span>
				</div>
			</div>
		</div>
	);
}

export default LoginButton;
