import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
import MandroidBB from '../MandroidBB.ttf';

const Navigation = styled.header`
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 100px 0;
	height: 100px;
	margin-bottom: 60px;
    font-family: MandroidBB;

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
		color: green;
		font-size: 2rem;
	}
	nav {
		position: fixed;
		background-color: transparent;
		display: flex;
		margin: 0 45%;

		ul {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
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
		color: #222;
		opacity: 0.55;
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
		background: #222;
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
		color: green;
	}

	.navbtn2 {
		position: relative;
		color: black;
        list-style-type: none;
	}

	.navbtn2:after {
		content: "";
		position: absolute;
		right: 0;
		width: 0;
		bottom: -5px;
		background: black;
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

    .fa-bars {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`

const ResponsiveNav = props => {
	const [expand, setExpand] = useState(false);
	const [colorChange, setColorChange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 120) {
			setColorChange(true);
		}
		else {
			setColorChange(false);
		}
	};

	window.addEventListener('scroll', changeNavbarColor);

	const handleToggle = e => {
		e.preventDefault();
		setExpand(!expand);
	}

	return (
		<Navigation>
			<div className="me-logo">
				<Link to="/">
					<p style={{visibility: 'hidden'}}>For Lebert</p>
					<em>
						<div className="secret-sauce">
							<span className="hint" style={{color: 'white', position: 'absolute', top: '73%', left: '73%'}}>Change the Title of the Webpage to: CLASSIFIED</span>
						</div>
					</em>
				</Link>
			</div>

			<nav className="nav">
				<i className="fa fa-bars" aria-hidden="true" />
				<ul className={`collapsed ${expand ? "expanded" : ""}`}>
					<NavLink activeClassName="active" to="/">
						<li
							className={
								colorChange ? 'navbtn2' : 'navbtn1'
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

                    <NavLink activeClassName="active" to="/goal">
						<li
							className={
								colorChange ? 'navbtn2' : 'navbtn1'
							}
						>
                        Goal
                        </li>
                    </NavLink>
				</ul>
			</nav>
		</Navigation>
	);
}

export default ResponsiveNav;


