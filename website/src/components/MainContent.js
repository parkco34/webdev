import React, {useState, useEffect, useRef} from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import PaperSegment from './PaperSegment';
import LearningSegment from './LearningSegment';
import './MandroidBB.css';


//<div className={classes.title}>
//    <Typography variant='h6' style={{fontFamily: 'MandroidBB', fontSize: '48px', fontWeight: 'bold'}}>IT MUST BE IN THE WATER</Typography>
//</div>
//<div className={classes.content}>
//    <Typography className={classes.content}>
//        "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently."
//    </Typography>
//</div>

const useStyles = makeStyles(thingy => ({
	toolbar: thingy.mixins.toolbar,
	title: {
		flexGrow: 1,
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
        fontSize: '24px',
        fontFamily: 'MandroidBB',
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
                    <LearningSegment />
                </div>
            </section>
            <div className="spacer" style={{height: '50px'}}/>
            <Divider style={{background: 'white'}}/>
        </div>
	);
}

export default MainContent;


