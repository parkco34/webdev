import React, {Component} from 'react';
import Background2 from '../comps/Background2';
import NavBar from '../comps/NavBar';
import Login from '../comps/Login';
import Signin from '../comps/Signin';
import styles1 from '../cssModules/NavBar.module.css';

class Join extends Component {
	render() {
		return (
			<div>
				<Background2 />
				<NavBar theStyle={styles1} up="white" down="black"/>
				<div className="signin-container">
					<Signin />
				</div>
			</div>
		);
	}
};

export default Join;


