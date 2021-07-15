import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
		zIndex: '1',

        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(51),
            height: theme.spacing(59),
        },
    },
	proper: props => ({
		backgroundImage: `url(${props.background})`,
		backgroundSize: props.size,
		backgroundPosition: props.backgroundPosition,
		backgroundRepeat: 'no-repeat',
	})
}));

export default function ThePaper(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.proper} size={props.size} background={props.background} backgroundPosition={props.backgroundPosition} />
        </div>
    );
}
