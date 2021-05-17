import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PaperSegment from './PaperSegment';

const useStyles = makeStyles(thingy => ({
	toolbar: thingy.mixins.toolbar,
	title: {
		flexGrow: 1,
		backgroundColor: thingy.palette.background.default,
		padding: thingy.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
	},
	content: {
		flexGrow: 1,
		padding: thingy.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        fontSize: '36px',
        fontFamily: 'youth-touch'
	},
	fullWidth: {
		width: '100%',
	},
}));

const flexStyle = {
	display: 'flex',
	flexwrap: 'wrap',
	justifyContent: 'center'
};

function MainContent() {
	const classes = useStyles();

	return (
		<main className={classes.fullWidth}>
			<div className={classes.toolbar} />
			<div className={classes.title}>
				<Typography variant='h6' style={{fontFamily: 'youth-touch', fontSize: '48px', fontWeight: 'bold'}}>IT MUST BE IN THE WATER</Typography>
			</div>
			<div className={classes.content}>
				<Typography className={classes.content}>
					"The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently."
				</Typography>
			</div>
			<div className={classes.content} style={flexStyle}>
				<PaperSegment />
			</div>
		</main>
	);
}

export default MainContent;

