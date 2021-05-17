import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img1 from '../Images/robot2.webp';
import img2 from'../Images/robot1.webp';
import img3 from '../Images/robot3.webp';

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
	paperHovered: {
		transform: "scale3d(1.13, 1.17, 1)"
	}
}));

const paperStyles = {
	transition: "transform 0.35s ease-in-out",
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

const photo1 = require('../Images/subImages/2014_1.webp');
const photo2 = require('../Images/subImages/2014_1.webp');
const photo3 = require('../Images/subImages/2014_1.webp');
const photo4 = require('../Images/subImages/2014_1.webp');

export default function PaperSegment() {
	const classes = useStyles();
    const photos = [photo1, photo2, photo3, photo4];
	const [state, setState] = useState({
		raised: false,
		shadow: 1
	});

	return (
		<div 
			className={classes.root}
		>
			<Paper 
				elevation={3} 
				style={paperStyles.imagery1}
				classes={{root: state.raised ? classes.paperHovered: ""}}
				onMouseOver={()=>setState({raised: true, shadow: 3})}
				onMouseOut={()=>setState({raised: false, shadow: 1})}
				raised={state.raised} zdepth={state.shadow}
			>
                <div>
                    Our Community (*PICS*)
                </div>
            </Paper>
			<Paper 
				elevation={3} 
				style={paperStyles.imagery2}
				classes={{root: state.raised ? classes.paperHovered: ""}}
				onMouseOver={()=>setState({raised: true, shadow: 3})}
				onMouseOut={()=>setState({raised: false, shadow: 1})}
				raised={state.raised} zdepth={state.shadow}
			>
                <div>
                    Donate
                </div>
            </Paper>
			<Paper 
				elevation={3} 
				style={paperStyles.imagery3}
				classes={{root: state.raised ? classes.paperHovered: ""}}
				onMouseOver={()=>setState({raised: true, shadow: 3})}
				onMouseOut={()=>setState({raised: false, shadow: 1})}
				raised={state.raised} zdepth={state.shadow}
			>
                <div>
                    Events
                </div>
            </Paper>
		</div>
	);
}

