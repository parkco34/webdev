import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import logo from '../Images/ucc-logo.png';

const Styles = {
	Wrapper: styled.main`
		display: flex;
		height: 10vh;
		background-color: #efeeee;
	`
};

const CSSStuff = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
		box-sizing: border-box;
	}

	body {
		font-size: 1.4rem;
		font-family: Georgia, serif;
	}
`;

const Navbar = {
	Wrapper: styled.nav`
		height: 8vh;
		padding: 2rem 0 0 5%;
		font-size: 2rem;
		display: flex;
		flex: 1;
		align-items: center;

	`,
	Logo: styled.h1`
		display: flex;
		z-index: 1;
		width: 11rem;
		height: 10rem;

		.logo-img {
			width: inherit;
			height: inherit;
		},
	`,
	Items: styled.ul`
		padding: 0.5rem 0 0 55%;
		display: flex;
		justify-content: space-between;
		font-weight: 600;
		font-size: 1.75rem;
		list-style: none;

		.item-div {
			width: 20rem;
			display: flex;
			justify-content: center;
		}
	`,
	Item: styled.li`
		width: 7rem;
		display: flex;
		justify-content: center;
		cursor:  pointer;
	`,
};

const MobileNav = {
	Wrapper: styled(Navbar.Wrapper)`
		position: fixed;
		width: 100vw;
		bottom: 0;
		justify-content: center;
	`,
	Items: styled(Navbar.Items)`
		flex: 1;
		padding: 0 2rem;
		justify-content: space-around;
	`,
	Item: styled(Navbar.Item)``,
};

function NewResponsiveNav() {
	const [windowDimension, setWindowDimension] = useState(null);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 640;

	return (
		<Styles.Wrapper>
			<CSSStuff />

			{isMobile ? (
				<MobileNav.Wrapper>
					<MobileNav.Items>
						<MobileNav.Item>Home</MobileNav.Item>
						<MobileNav.Item>About</MobileNav.Item>
						<MobileNav.Item>Join</MobileNav.Item>
					</MobileNav.Items>
				</MobileNav.Wrapper>
			) : (
				<Navbar.Wrapper>
					<Navbar.Logo><img src={logo} alt="no image found!" className="logo-img"/></Navbar.Logo>			
					<Navbar.Items>
						<div className="item-div">
							<Navbar.Item>Home</Navbar.Item>
						</div>

						<div className="item-div">
							<Navbar.Item>About</Navbar.Item>
						</div>

						<div className="item-div">
							<Navbar.Item>Join</Navbar.Item>
						</div>
					</Navbar.Items>
				</Navbar.Wrapper>
			)}
		</Styles.Wrapper>
	);
}

export default NewResponsiveNav;
