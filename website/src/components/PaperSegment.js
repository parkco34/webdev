import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import img1 from '../myImages/robot2.webp';
import img2 from'../myImages/robot1.webp';
import img3 from '../myImages/robot3.webp';
import ImageList from './ImageList.js';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
		lineHeight: '10',
		padding: '3%',
		color: 'white',
		fontSize: '56px',
		height: 'inherit',
		margin: 'auto',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(2),
			width: theme.spacing(50),
			height: theme.spacing(55),
		},
	},
	toproot: {
		display: 'flex',
        width: 'inherit',
        flex: 'wrap',
		justifyContent: 'center',
		fontFamily: 'Lucida Console',
		gap: '2%',
	},
	paperHovered: {
//		transform: "scale3d(1.13, 1.10, 1)",
		transition: "transform 0.37s ease-in-out",
		transform: "translate(0px, -50px)",
	},
}));

const PaperSegment = () => {
	const classes = useStyles();

	const [expand1, setExpand1] = useState({
		raised: false,
		shadow: 1,
	});

	const [expand2, setExpand2] = useState({
		raised: false,
		shadow: 1,
	});

	const [expand3, setExpand3] = useState({
		raised: false,
		shadow: 1,
	});

	return (
        <div>
            <section className={classes.toproot}>
                <div >
                    <Paper
                        className={classes.root}
                        classes={{root: expand1.raised ? classes.paperHovered : ""}}
                        onMouseOver={()=>setExpand1({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand1({raised: false, shadow: 1})}
                        raised={expand1.raised ? 1 : 0} zdepth={expand1.shadow}
                        style={{backgroundImage: `url(${img1})`}}
                        elevation={3}
                    >
                        <div>
                            History
                        </div>
                    </Paper>
                </div>

                <div>
                    <Paper
                        style={{backgroundImage: `url(${img2})`}}
                        classes={{root: expand2.raised ? classes.paperHovered : ""}}
                        onMouseOver={()=>setExpand2({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand2({raised: false, shadow: 1})}
                        raised={expand2.raised ? 1 : 0} zdepth={expand2.shadow}
                        className={classes.root}
                        elevation={3}
                    >
                        <div>
                            Current
                        </div>
                    </Paper>
                </div>

                <div>
                    <Paper
                        style={{backgroundImage: `url(${img3})`}}
                        classes={{root: expand3.raised ? classes.paperHovered : ""}}
                        onMouseOver={()=>setExpand3({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand3({raised: false, shadow: 1})}
                        raised={expand3.raised ? 1 : 0} zdepth={expand3.shadow}
                        className={classes.root}
                        elevation={3}
                    >
                        <div>
                            Future
                        </div>
                    </Paper>
                </div>
            </section>
            <div className="da-images">
                <ImageList />
            </div>
        </div>
	)
}

export default PaperSegment;

