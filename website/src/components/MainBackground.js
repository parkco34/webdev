import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',

        '& .main-image': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: 'inherit',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% center',
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
