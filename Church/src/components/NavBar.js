import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

const Navigation = styled.header`
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 300px 0;
	height: 100px;
	margin-bottom: -73px;
    font-family: Didot, serif;
    font-size: 1.15rem;
    overflow: hidden;

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
		position: fixed;
		background-color: transparent;
		display: flex;
		margin: 0 35%;

		ul {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 0 31%;
		}
		li {
			margin: 0 45px;
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
		color: ${props => props.fontColor || "black"};
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
		background: ${props => props.fontColor || "black"};
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
		color: ${props => props.scrollingfontColor || "black"};
        list-style-type: none;
	}

	.navbtn2:after {
		content: "";
		position: absolute;
		right: 0;
		width: 0;
		bottom: -5px;
		background: ${props => props.scrollingfontColor || "black"};
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

    @media only screen and (max-width: 1445px) {
        margin: 0 -100px;
    }

    .fa-bars {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .logo-container {
        display: flex;
        position: fixed;
        margin: 0 5rem 4rem -3.5rem;
    }

	.me-logo {
		color:${props => props.fontColor || "black"};
	}

	.thelogo {
		width: 85px;
		height: 85px;
		z-index: 1;
	}
`

const ResponsiveNav = props => {
	const [colorChange, setColorChange] = useState(false);

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
		<Navigation fontColor={props.fontColor} scrollingfontColor={props.scrollingfontColor}>
			<div className="logo-container">
				<Link to="/">
					<p style={{visibility: 'hidden'}}>For Kyle Lebert</p>
						<div className="me-logo" fontColor={props.fontColor}>
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

export default ResponsiveNav;







