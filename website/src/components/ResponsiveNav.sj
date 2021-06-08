import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';

const Navigation = styled.header`
	width: 100%;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 100px 0;
	height: 140px;
	margin-bottom: 60px;
	background: #f8f8f8f;

	p {
		width: 500px;
		display:block;
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

	a {
		color: #222;
		opacity: 0.55;
		transition: all 0.6s;
		font-size: 1em;
	}

	a:hover {
		opacity: 1;
	}
	.fa-bars {
		display: none;
		color: #222;
		font-size: 2rem;
	}
	nav {
		ul {
			display: flex;
			justify-content: space-between;
		}
		li {
			margin: 0 15px;
			jusfity-content: space-between;
		}
		a {
			font-size: 1em;
			text-decoration: none;
			.active {
				color: tomato;
			}
		}
		a.active {
			color: #222;
		}
	}
`

const ResponsiveNav = () => {
	const [expand, setExpand] = useState(false);

	const handleToggle = e => {
		e.preventDefault();
		setExpand(!expand);
	}

	return (
		<Navigation>
			<div className="me-logo">
				<Link to="/">
					<p>A ParkDaddy Creation</p>
					<em>
						<div className="secret-sauce">
							<span className="hint">UNLOCK</span>
						</div>
					</em>
				</Link>
			</div>

			<nav className="nav">
				<i className="fa fa-bars" aria-hidden="true" />
				<ul className={`collapsed ${expand ? "expanded" : ""}`}>
					<NavLink activeClassName="active" to="/">
						<li>Home</li>
					</NavLink>

					<NavLink activeClassName="active" to="/about">
						<li>About</li>
					</NavLink>

					<NavLink activeClassName="active" to="/join">
						<li>Join</li>
					</NavLink>
				</ul>
			</nav>
		</Navigation>
	);
}

export default ResponsiveNav;
