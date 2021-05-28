import React, {Component} from 'react';
import Background2 from '../components/Background2';
import NavBar from '../components/NavBar';
import {makeStyles} from '@material-ui/core/styles';
import Login from '../components/Login';
import Signin from '../components/Signin';

class Join extends Component {
	render() {
		return (
			<div>
				<Background2 />				
				<NavBar />
				<div className="login-container">
					<Login />
				</div>
				<div className="signin-container">
					<Signin />
				</div>
			</div>
		);
	}
};

export default Join;

