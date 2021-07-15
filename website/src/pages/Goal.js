import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Background from '../components/Background';
import theImage from '../Images/goals.jpg';
import bkImage from '../Images/cyber_city2.jpg';
import comp_sys_image from '../Images/subImages/comp_sys.jpg'
import math_image from '../Images/subImages/math.jpg';
import scrollImage from '../Images/robot1.webp';
import poem from '../Images/mypoem.jpg';
import image3 from '../Images/subImages/misc2.jpg';
import ThePaper from '../components/ThePaper';
import ResponsiveNav from '../components/ResponsiveNav.js';
import thelogo from '../Images/logo22.jpg';
import TheScrollEffect from '../components/TheScrollEffect';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
		width: '100vw',
		height: '100vh',
		margin: '0',
		padding: '0',

        '& .sxn': {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
        },
		'& .da-header': {
			height: '0',
			width: '0',
		},
        '& .sub-sxn': {
            display: 'flex',
            flexDirection: 'row',
            margin: '0 auto',
        },
        '& .paper-sheet': {
            backgroundImage: `url(${image3})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        },
        '& .papers-bk': {
			width: '100%',
			height: '655px',
            backgroundColor: 'white',
            backgroundImage: `url(${bkImage})`,
            backgroundSize: 'cover',
			backgroundPosition: 'center',
        },
		'& .me-poem': {
			display: 'none',
		},

		'& .first-img': {
			backgroundImage: `url(${theImage})`,
			backgroundSize: 'cover',
			backgroundPosition: 'inherit top',
			backgroundRepeat: 'no-repeat',
			width: '100%',
			height: '100%',
		}
    }
})

const Goal = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <header className="da-header">
                <ResponsiveNav hintColor="transparent" fontcolor="black" scrollingFontColor="white" logo={thelogo} />

            </header>
            <section className="sxn">
                <div className="sub-sxn first-img">
                </div>
            </section>

            <section className="sxn papers-bk">
                <div className="sub-sxn">
					<ThePaper background={comp_sys_image} size="cover" backgroundPosition="100%" className="paper-sheet"/>
                </div>

                <div className="sub-sxn">
                    <ThePaper className="paper-sheet" background={math_image} size="cover" backgroundPosition="89% 100%"/>
                </div>
            </section>

			<section className="sxn deleteme">
				<div className="sub-sxn">
					Hello, Friend...
				</div>
			</section>

            <section className="sxn">
                <div className="sub-sxn me-poem">
                    <img src={poem} className="my-poem" alt="CLASSIFIED"/>
                </div>
            </section>
			
            <section className="sxn">
                <div className="sub-sxn scroll-effect">
					<TheScrollEffect backImage={scrollImage} Margin={'500px'} Width={'600px'} Height={'750px'}/>
                </div>
            </section>
        </div>
    );
}

export default Goal;


