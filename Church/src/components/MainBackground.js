import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '95%',
        width: '100vw',
        margin: '-100px',

        '& .main-image': {
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '95%',
        width: '100vw',
        margin: '-100px',

        '& .main-image': {
            display: 'flex',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxHeight: '100vh',
            height: '100vh',
        },
    },
});

const MainBackground = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="main-image" style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
    );
}

export default MainBackground;


            maxHeight: '100vh',
            height: '100vh',
        },
    },
});

const MainBackground = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="main-image" style={{backgroundImage: `url(${props.image})`}}>
            </div>
        </div>
    );
}

export default MainBackground;

