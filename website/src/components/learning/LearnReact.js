import React, {Component} from 'react';

const ThemeContext = React.createContext('light');

function Toolbar() {
	return (
		<div>
			<ThemedButton />
		</div>
	);
}

class LearnReact extends Component {
	render() {
		return (
			<ThemeContext.Provider value="dark">
				<Toolbar />
			</ThemeContext.Provider>
		);
	}
}

function Button(props) {
	return (
		<div>
			<button type="button" className="random-btn" style={{backgroundColor: props.backColor, color: props.fontColor}}></button>
		</div>
	);
}

class ThemedButton extends Component {
	static contextType = ThemeContext;

	render() {
		return (
			<Button theme={this.context} />
		);
	}
}

export default LearnReact;
