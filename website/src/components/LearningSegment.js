import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Programming from './learning/Programming';
import Movies from '../entertainment/Movies';
import img1 from '../myImages/math.jpg';
import img2 from'../myImages/cs.jpg';
import img3 from '../myImages/halt.jpg';
import './MandroidBB.css';

const useStyles = makeStyles(theme => ({
	root: {
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		display: 'flex',
		justifyContent: 'center',
		lineHeight: '10',
		padding: '3%',
		color: '#CBCCD1',
		fontSize: '56px',
		height: 'inherit',
		margin: 'auto',
		flexWrap: 'wrap',
        fontFamily: 'MandroidBB',
		'& > *': {
			margin: theme.spacing(2),
			width: theme.spacing(50),
			height: theme.spacing(55),
		},
        '& .proper-text': {
            textShadow: 'black 1px 0 30px',
        },
		'& .halt': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: '3px solid yellow',
			width: '100%',
			height: '700px',
		},
		'& .halt-catchfire': {
			width: '95%',
			height: '650px',
		},
	},
	toproot: {
		display: 'flex',
        width: 'inherit',
        flex: 'wrap',
		justifyContent: 'center',
		gap: '2%',
	},
	paperHovered: {
		transition: "transform 0.37s ease-in-out",
		transform: "scale(1.1)",
		cursor: 'pointer',
	},
}));

// Refactor this shit, please...
const LearningSegment = () => {
	const classes = useStyles();
	const [clicked1, setClicked1] = useState(false);

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

	const [clicked, setClicked] = useState(false);

	const handleOnClick = () => setClicked(!clicked);
	const handleOnClick1 = () => setClicked1(!clicked1);

	return (
        <div>
            <section className={classes.toproot}>
                <div className="paper-item">
                    <Paper
                        classes={{root: expand1.raised ? classes.paperHovered : ""}}
                        onMouseOver={()=>setExpand1({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand1({raised: false, shadow: 1})}
                        raised={expand1.raised ? 1 : 0} zdepth={expand1.shadow}
                        className={classes.root}
                        style={{backgroundImage: `url(${img1})`}}
                        elevation={3}
                    >
                        <div className="paper-item-title">
                            <span className='proper-text'>Mathematics</span>
                        </div>
                    </Paper>
                </div>

                <div className="paper-item">
                    <Paper
                        classes={{root: expand2.raised ? classes.paperHovered : ""}}
						onClick={handleOnClick}
                        onMouseOver={()=>setExpand2({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand2({raised: false, shadow: 1})}
                        raised={expand2.raised ? 1 : 0} zdepth={expand2.shadow}
                        className={classes.root}
                        style={{backgroundImage: `url(${img2})`}}
                        elevation={3}
                    >
                        <div className="paper-item-title">
                            <span className="proper-text">Technology</span>
                        </div>
                    </Paper>
                </div>

                <div className="paper-item">
                    <Paper
                        classes={{root: expand3.raised ? classes.paperHovered : ""}}
						onClick={handleOnClick1}
                        onMouseOver={()=>setExpand3({raised: true, shadow: 3})}
                        onMouseOut={()=>setExpand3({raised: false, shadow: 1})}
                        raised={expand3.raised ? 1 : 0} zdepth={expand3.shadow}
                        className={classes.root}
                        style={{backgroundImage: `url(${img3})`}}
                        elevation={3}
                    >
                        <div className="paper-item-title">
                            <span className="proper-text">Entertainment</span>
                        </div>
                    </Paper>
                </div>
            </section>

			<div className="programming shh">
				{clicked &&
					<section className="programming shh">
						<Programming />
					</section>
				}
			</div>

			<div>
				{clicked1 &&
				<section className={classes.root}>
					<div className="halt">
						<iframe
							src="https://en.wikipedia.org/wiki/Halt_and_Catch_Fire_(computing)"
							frameborder="0"
							className="halt-catchfire"
						>
						</iframe>
					</div>

					<div className="api-movies">
						<Movies />
					</div>
				</section>
				}
			</div>
        </div>
	);
}

export default LearningSegment;



