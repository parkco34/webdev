import React, {useState, useEffect, useRef} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(thingy => ({
	toolbar: thingy.mixins.toolbar,
	title: {
		flexGrow: 1,
		padding: thingy.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Didot',
	},
	content: {
		flexGrow: 1,
		padding: thingy.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Didot, serif',
        fontSize: '24px',
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
        <div className="MainContent">
            <section className={classes.fullWidth}>
                <div className="spacer" />
                <div className={classes.content}>
                </div>
            </section>
            <div className="spacer" style={{height: '50px'}}/>
            <Divider style={{background: 'white'}}/>
            <section className={classes.fullWidth}>
                <div className={classes.title}>
                </div>
                <div className={classes.content}>
                    <Typography className={classes.content}>
                        “Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.” – Richard Feynman
                    </Typography>
                </div>
                <div className={classes.content}>
                    // Something goes here
                </div>
            </section>
            <div className="spacer" style={{height: '50px'}}/>
            <Divider style={{background: 'white'}}/>
        </div>
	);
}

export default MainContent;

