import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(thingy => ({
	toolbar: thingy.mixins.toolbar,
	title: {
		flexGrow: 1,
		backgroundColor: thingy.palette.background.default,
		padding: thingy.spacing(3),
	},
	content: {
		flexGrow: 1,
		padding: thingy.spacing(3),
	},
	fullWidth: {
		width: '100%',
	}
}));

function MainContent() {
	const classes = useStyles();

	return (
		<main className={classes.fullWidth}>
			<div className={classes.toolbar} />
			<div className={classes.title}>
				<Typography variant='h6'>Title</Typography>
			</div>
			<div className={classes.content}>
				<Typography paragraph>
					Writing some random stuff in case I feel this is will be useful...	
				</Typography>
			</div>
		</main>
	);
}

export default MainContent;