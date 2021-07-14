import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import logo from '../Images/ucc-logo.png'
import {Home, User, Info} from 'react-feather';
import {NavLink, Link} from 'react-router-dom';

const Styles = styled.div`
    display: flex;
    background-color: transparent;
	font-size: 16px;
`;

const Navbar = {
    Wrapper: styled.nav`
        display: flex;
        flex: 1;
        align-self: flex-start;
        padding: 1rem 7rem;
        justify-content: space-between;
        align-items: center;
		color white;
		z-index: 1;

		a {
			text-decoration: none;
		}

		a.active {
			color: grey;
		}

		.navbtn1 {
			position: relative;
			list-style-type: none;
			color: ${props => props.fontColor || "white"};
			opacity: 1;
			transition: all 0.6s;
		}
		.navbtn1:after {
			content: "";
			position: absolute;
			right: 0;
			width: 0;
			bottom: -5px;
			height: 3px;
			transition-proerty: width;
			transition-duration: 0.3s;
			transition-timing-function: ease-out;
			background: ${props => props.fontColor || "white"};
		}

		.navbtn1:hover:after,
		.navbtn1:focus:after,
		.navbt1:active:after {
			left: 0;
			right: auto;
			opacity: 1;
			width: 100%;
		}
    `,
    Logo: styled.img`
        border: 1px solid grey;
		margin: 0 0 0 4%;
		width: 5.5rem;
		height: 5.5rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style: none;
		margin-right: 4rem;
    `,
    Item: styled.li`
        padding: 0 2rem 0 4rem;
        cursor: pointer;
    `,
};

const MobileNav = {
    Wrapper: styled(Navbar.Wrapper)`
        flex: 1;
        position: fixed;
        width: 100vw;
        bottom: 0;
        justify-content: center;

		a {
			text-decoration: none;
		}
    `,
    Logo: styled(Navbar.Logo)`
    `,
    Items: styled(Navbar.Items)`
        flex: 1;
        padding: 0 2rem;
        justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.2rem;
    `,
	Icon: styled.span``,
};

const NavigationBar = props => {	
    const [windowDimension, setWindowDimension] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindow() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener('resize', handleWindow);
        return () => window.removeEventListener('resize', handleWindow);
    }, []);

	const isMobile = windowDimension <= 640;

    return (
        <div className="NavigationBar">
            <Styles>
                {isMobile ? (
                    <MobileNav.Wrapper>
                        <MobileNav.Items>
							<NavLink activeClassName="active" to="/">
								<MobileNav.Item className="navbtn1">
									<MobileNav.Icon>
										<Home size={16} />
									</MobileNav.Icon>
									Home
								</MobileNav.Item>
							</NavLink>
							
							<NavLink activeClassName="active" to="/about">
								<MobileNav.Item className="navbtn1">
									<MobileNav.Icon>
										<Info size={16} />
									</MobileNav.Icon>
									About
								</MobileNav.Item>
							</NavLink>
							
							<NavLink activeClassName="active" to="/join">
								<MobileNav.Item className="navbtn1">
									<MobileNav.Icon>
										<User size={16} />
									</MobileNav.Icon>
									Join
								</MobileNav.Item>
							</NavLink>

                        </MobileNav.Items>
                    </MobileNav.Wrapper>
                    ) : (
                    <Navbar.Wrapper>
						<Navbar.Logo src={logo} alt="NO LOGO FOUND!"/> 
                        <Navbar.Items>
							<NavLink activeClassName="active" to="/">
								<Navbar.Item className="navbtn1">Home</Navbar.Item>
							</NavLink>
							
							<NavLink activeClassName="active" to="/about">
								<Navbar.Item className="navbtn1">About</Navbar.Item>
							</NavLink>

							<NavLink acitveClassName="active" to="/join">
								<Navbar.Item className="navbtn1">Join</Navbar.Item>
							</NavLink>
                        </Navbar.Items>
                    </Navbar.Wrapper>
                    )
                }
            </Styles>
        </div>
    );
}

export default NavigationBar;

