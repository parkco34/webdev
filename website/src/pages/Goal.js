import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Background from '../comps/Background';
import theImage from '../myImages/subImages/misc1.jpg';
import bkImage from '../myImages/subImages/joinus1.jpg';
import image2 from '../myImages/depression1.webp';
import poem from '../myImages/mypoem.jpg';
import image3 from '../myImages/subImages/misc2.jpg';
import ThePaper from '../comps/ThePaper';
import ResponsiveNav from '../comps/ResponsiveNav.js';
import melogo2 from '../myImages/logo2.jpg';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        maxWidth: '100vw',
        maxHeight: '100vh',

        '& .sxn': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
        },
        '& .sub-sxn': {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 auto',
        },
        '& .paper-sheet': {
            backgroundImage: 'url(`${image3}`)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        '& .papers-bk': {
            backgroundColor: 'white',
            backgroundImage: 'url(`${bkImage}`)',
            backgroundSize: 'cover',
        }
    }
})

const Goal = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header className="da-header">
                <ResponsiveNav hintColor="transparent" fontcolor="black" scrollingFontColor="white" logo={melogo2} />

            </header>
            <section className="sxn">
                <div className="sub-sxn first-img">
                    <img src={theImage} style={{width: '1500px', hegith: '900px', overflow: 'hidden'}} alt="No Image Found!"/>
                </div>
            </section>

            <section className="sxn papers-bk">
                <div className="sub-sxn">
                    <ThePaper className="paper-sheet"/>
                </div>

                <div className="sub-sxn">
                    <ThePaper className="paper-sheet"/>
                </div>
            </section>

            <section className="sxn">
                <div className="sub-sxn">
                    <img src={poem} className="my-poem" alt="CLASSIFIED"/>
                </div>
            </section>
        </div>
    );
}

export default Goal;


