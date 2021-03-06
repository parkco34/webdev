// Passing props to state and syncing props to state using Hooks:
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import LoginBox from '../comps/LoginBox';
import ModalDialog from './ModalDialog';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isDialogOpen: false,
		};

		this.handleOpen = this.handleOpen.bind(this);
	}

	handleOpen() {
		this.setState(state => ({
			isDialogOpen: !state.isDialogOpen
		}));
	}

	render() {
		return (
			<div className="Signin">
				<Button variant="contained" color="primary" onClick={this.handleOpen} style={{zIndex: '2'}}>
					Signup
				</Button>

				<ModalDialog open={this.state.isDialogOpen} handleClose={this.handleOpen}/>
			</div>
		);
	}
};

export default Login;
