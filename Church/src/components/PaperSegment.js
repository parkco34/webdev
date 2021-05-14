import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img1 from '../Images/bengal1.webp';
import img2 from'../Images/robot1.webp';
import img3 from '../Images/question1.webp';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		margin: 'auto',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(55),
			height: theme.spacing(55),
		},
        '& > div > div': {
            display: 'flex',
            justifyContent: 'center',
            lineHeight: '10',
            padding: '3%',
            color: 'white',
            fontSize: '56px',
            fontFamily: 'youth-touch',
            height: 'inherit',
        }
	},
}));

const paperStyles = {
    imagery1: {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    imagery2: {
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
    imagery3: {
        backgroundImage: `url(${img3})`,
        backgroundSize: 'cover',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    },
};

const photo1 = require('./subImages/2014_1.jpg');
const photo2 = require('./subImages/2014_2.jpg');
const photo3 = require('./subImages/2014_3.jpg');
const photo4 = require('./subImages/2014_4.jpg');

export default function PaperSegment() {
	const classes = useStyles();
    const photos = [photo1, photo2, photo3, photo4];

    const [select, setSelect] = useState();

	return (
		<div className={classes.root}>
			<Paper elevation={3} style={paperStyles.imagery1}>
                <div>
                    Our Community (*PICS*)
                </div>
            </Paper>
			<Paper elevation={3} style={paperStyles.imagery2}>
                <div>
                    Donate
                </div>
            </Paper>
			<Paper elevation={3} style={paperStyles.imagery3}>
                <div>
                    Events
                </div>
            </Paper>
		</div>
	);
}
