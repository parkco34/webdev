// Passing props to state and syncing props to state using Hooks:
import React, {Component} from 'react';
import LoginBox from '../components/LoginBox';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoginOpen: true,
			isRegisterOpen: false,
		};
	}

	render() {
		return (
			<div className="root-container">
				<LoginBox />
			</div>
		);
	}
}

export default Login;
