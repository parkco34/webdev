import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        fontFamily: 'Didot',
        fontSize: '1rem',
    }
});

const Main = props => {
    const classes = useStyles(props);

    return (
        <div>
            <div className={classes.root}>
                <section className="sxn">
                </section>
            </div>
        </div>
    );
}

export default Main;
