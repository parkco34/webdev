import React, {Fragment, Component} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		margin: '0',
		padding: '0',
		width: '100vw',
		height: '300vh',
		overflowX: 'hidden',
	},
});

function ParallaxWrapper(JSXElement, weight) {
	return class extends Component {
		constructor(props) {
			super(props);

			this.state = {
				start_position: null,
				ease: 0.05,
				WrappedElement: <Fragment></Fragment>
			}
		}

		componentDidMount() {
			this.last_offset = 0;
			this.animation_running = false;
			this.wrappedElement = null;

			const ref = React.createRef(); // ??????

			const JSXElementWithRef = React.cloneElement(
				JSXElement,
				{ ...JSXElement.props, ref: ref },
			)

			this.setState({
				ease: weight,
				WrappedElement: JSXElementWithRef,
			}, () => {
				this.setState({ start_position: ref.current.offsetTop }, () => {
					this.wrappedElement = ref;
					document.addEventListener("scroll", this.animate_scroll);
				});
			});
		}

		animation_scroll = () => {
			if (!this.animation_running) {
				this.animation_running = true;
				requestAnimationFrame(this.animation_loop);
			}
		}

		animation_loop = () => {
			let current_offset = window.pageYOffset;

			let difference = current_offset - this.last_offset;
			difference += this.state.ease;

			if (Math.abs(difference) < 0.05) {
				this.last_offset = current_offset;
				this.animation_running = false;
				return;
			}

			this.wrappedElement.current.style.top = `${this.state.start_position - this.last_offset}px`;

			this.last_offset += difference;

			requestAnimationFrame(this.animation_loop);
		}

		render() {
			const {classes} = this.props;

			return (
				<Fragment className={classes.root}>
					{this.state.WrappedElement}
				</Fragment>
			);
		}
	}
}

export default withStyles(useStyles)(ParallaxWrapper);

