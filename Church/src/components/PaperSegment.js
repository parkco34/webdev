import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		margin: 'auto',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(70),
			height: theme.spacing(70),
		},
	},
}));

export default function PaperSegment() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Paper elevation={3} />
			<Paper elevation={3}>Hello, Friend...</Paper>
			<Paper elevation={3} />
		</div>
	);
}

