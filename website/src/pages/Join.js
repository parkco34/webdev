import React, {Component} from 'react';
import Background2 from '../components/Background2';
import ResponsiveNav from '../components/ResponsiveNav';
import Login from '../components/Login';
import Signin from '../components/Signin';
import styles1 from '../cssModules/NavBar.module.css';
import melogo1 from '../Images/logo22.jpg';

class Join extends Component {
	render() {
		return (
			<div>
				<Background2 />
				<ResponsiveNav hintColor="white" fontcolor="white" scrollingFontColor="white" logo={melogo1}/>
				<div className="signin-container">
					<Signin />
				</div>
			</div>
		);
	}
};

export default Join;


