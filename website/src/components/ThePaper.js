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
		background: `url(${props.Background})`
	})
}));

export default function ThePaper(props) {
    const classes = useStyles(props);
	const {proper} = props;

    return (
        <div className={classes.root}>
            <Paper elevation={3} Background={props.Background} background={props.background}/>
        </div>
    );
}
