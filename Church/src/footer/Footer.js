import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Grid = {
	Container: styled.div`
		width: inherit;
		height: inherit;
	`,
	Row: styled.div`
		display: flex;
		height: 4.5rem;
	`,
	Col: styled.div`
		flex: ${props => props.size};
	`,
};

const Footer = () => {
	return (
		<Grid.Container>
			<Grid.Row style={{backgroundColor: "#DA04C9"}}>
				<Grid.Col size={2}>

				</Grid.Col>

				<Grid.Col size={2}>
					<div className="font" style={{padding: '3.0%'}}>
						<FontAwesomeIcon href="#" color="blue" size="2x" icon={faFacebook} style={{paddingRight: '5%'}}></FontAwesomeIcon>
						Hahn Automotive Aftermarket Parts &copy; 2021
					</div>	
				</Grid.Col>

				<Grid.Col size={2}>
				</Grid.Col>
			</Grid.Row>
		</Grid.Container>
	);
}

export default Footer;
