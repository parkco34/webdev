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
	background: #f8f8f8f;
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
			margin: 0 45px;
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

const ResponsiveNav = () => {
	const [expand, setExpand] = useState(false);
    const [scrollStatus, setScrollStatus] = useState("up");

    useEffect(() => {
        const listener = document.addEventListener("scroll", e => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled >= 120) {
                if (scrollStatus !== "down") {
                    setScrollStatus("down");
                }
            }
            else {
                if (scrollStatus !== "up") {
                    setScrollStatus("up");
                }
            }
        });
    }, []);

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
                            style={{
                                color:
                                scrollStatus === "up" ?
                                props.up : props.down
                            }}
                        >
                            Home
                        </li>
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

