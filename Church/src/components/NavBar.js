import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

const Navigation = styled.header`
	z-index: 1;
	display: flex;
	justify-content: space-between;
	height: 5rem;
    font-family: Didot, serif;
    padding-left: 10rem;

	@media only screen and (max-width: 950px) {
		display: flex;
		justify-content: space-between;
		margin-left: 500px;
	}

    em {
		font-size: 0.5em;
		float: left;
		display: block;

		.secret-sauce {
			display: inline-block;
			line-height: 260%;
			float: left;
		}
	}

	.fa-bars {
		display: none;
		font-size: 2rem;
	}
	nav {
        padding: 2rem 0 0 0;
		position: fixed;
		background-color: transparent;
		display: flex;

		ul {
			display: flex;
			margin-left: 225%;
			flex-direction: row;
			justify-content: space-between;
            font-weight: 600;
            font-size: 1rem;

		}
		li {
			margin: 0 65px;
			justify-content: space-between;
		}
		a {
			font-size: 1em;
			text-decoration: none;
			.active {
			}
		}
		a.active {
			color: black;
		}
	}

	.navbtn1 {
		position: relative;
		color: ${props => props.fontcolor || "black"};
		opacity: 1;
		transition: all 0.6s;
		font-size: 1em;
        list-style-type: none;
	}
	.navbtn1:after {
		content: "";
		position: absolute;
		right: 0;
		width: 0;
		bottom: -5px;
		background: ${props => props.fontcolor || "black"};
		height: 3px;
		transition-property: width;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	.navbtn1:hover:after,
	.navbtn1:focus:after,
	.navbtn1:active:after {
		left: 0;
		right: auto;
		width: 100%;
		opacity: 1;
	}

	.navbtn2 {
		position: relative;
		color: ${props => props.scrollingFontColor || "black"};
        list-style-type: none;
	}

	.navbtn2:after {
		content: "";
		position: absolute;
		right: 0;
		width: 0;
		bottom: -5px;
		background: ${props => props.scrollingFontColor || "black"};
		height: 3px;
		transition-property: width;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	.navbtn2:hover:after,
	.navbtn2:focus:after,
	.navbtn2:active:after {
		left: 0;
		right: auto;
		width: 100%;
        color: black;
	}

    @media only screen and (max-width: 800px) {
        padding: 0px;
    }

    @media only screen and (max-width: 600px) {
        height: auto;
        min-height: 50px;
        display: block;
        position: relative;

        a {
            padding: 20px 0px;
        }
    }

    @media only screen and (max-width: 450px) {
        margin: 0 -100px;
    }

    .logo-container {
        display: flex;
        position: relative;
        padding: 0 0 0 0;
        width: 7rem;
        height: 7rem;
    }

    .fa-bars {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

	.me-logo {
        width: 5.5rem;
        height: 5.5rem;
		color:${props => props.fontcolor || "black"};
	}

	.thelogo {
		z-index: 1;
        width: inherit;
        height: inherit;

	}
`;

const Navbar = props => {
	const [colorChange, setColorChange] = useState(false);
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

	const isMobile = windowDimension <= 650;

	const changeNavbarColor = () => {
		if (window.scrollY >= 120) {
			setColorChange(true);
		}
		else {
			setColorChange(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNavbarColor);
	},[]);

	return (
		<Navigation fontcolor={props.fontcolor} scrollingFontColor={props.scrollingFontColor}>
			<div className="logo-container">
				<Link to="/">
                    <div className="me-logo" fontcolor={props.fontcolor}>
                        <img
                            src={props.logo}
                            alt="No Logo found!"
                            className="thelogo"
                        />
                    </div>
					<em>
						<div className="secret-sauce">
							<span className="hint" style={{color: props.hintColor, position: 'absolute', top: '73%', left: '73%'}}>Change the Title of the Webpage to: CLASSIFIED</span>
						</div>
					</em>
				</Link>
			</div>

			<nav className="nav">
				<i className="fa fa-bars" aria-hidden="true" />
				<ul >
					<NavLink activeClassName="active" to="/">
						<li
							className={
								colorChange ? 'navbtn2' : 'navbtn1 twat'
							}
						>
                            Home
                        </li>
					</NavLink>

					<NavLink activeClassName="active" to="/about">
						<li
							className={
								colorChange ? 'navbtn2' : 'navbtn1'
							}
						>
                        About
                        </li>
					</NavLink>

					<NavLink activeClassName="active" to="/join">
						<li
							className={
								colorChange ? 'navbtn2' : 'navbtn1'
							}
						>
                        Join
                        </li>
					</NavLink>
				</ul>
			</nav>
		</Navigation>
	);
}

export default Navbar;


