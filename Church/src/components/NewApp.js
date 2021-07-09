import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

const Styles = {
	wrapper: styled.main`
		display: flex;
		background-color: #eeeeee;
		height: 100vh;
	`,
};

const cssStuff = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

const Navbar = {
	wrapper: styled.nav`
		flex: 1;
		align-self: flex-start;
		padding: 1rem 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
	`,
	Logo: styled.div`
		display: flex;
		width: 7rem;
		height: 7rem;
		border: 1px solid grey;

		& .the-logo {
			color: ${props => props.fontColor || "black"};
			height: 5.5rem;
			width: 5.5rem;
		}
		& .me-logo {
			z-index: 1;
			width: inherit;
			height: inherit;
		}
	`,
	Items: styled.ul`
		display: flex;
	`,
	Item: styled.li`
		padding: 0 1rem;
		cursor: pointer;
	`,
}

function App() {
	const [windowDimension, setWindowDimension] = useState(window.innderWidth);

	useEffect(() => {
		function handleWindow() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener('resize', handleWindow);
		return () => window.removeEventListener('resize', handleWindow);
	}, []);

	return (
		<Styles.wrapper>
			<csStuff />
			<Navbar.Logo>
				<div className="the-logo">
					<img src={props.logo} alt="NO LOGO FOUND!" className="me-logo" />
				</div>
				<em>
					<div className="secret-sauce">
						<span className="hint" style={{color: props.hintColor, position: 'absolute', top: '73%', left: '73%'}}>CHANGE THE TITLE OF THIS WEBPAGE TO: </span>
					</div>
				</em>
			</Navbar.Logo>
			<Navbar.wrapper>
				<Navbar.Items>Home</Navbar.Items>
				<Navbar.Items>About</Navbar.Items>
				<Navbar.Items>Join</Navbar.Items>
			</Navbar.wrapper>
		</Styles.wrapper>
	);
}

export default App;
