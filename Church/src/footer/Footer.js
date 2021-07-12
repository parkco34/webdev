import React from 'react';
import {
	Box,
	Column,
	Row,
	Container,
	FooterLink,
} from '../styles/FooterStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<Box>
			<h1 style={{
				color: 'white',
				textAlign: 'center',
				margintop: '-50px'
				}}>
			</h1>
			<Container>
				<Row>
					<Column>
						<FooterLink href="https://www.facebook.com/LakevilleUCC/"><FontAwesomeIcon color="blue" icon={faFacebook} size="2x" /></FooterLink>
					</Column>

					<Column classname="col-txt">
						<FooterLink className="col-txt-child"><span className="label-txt">Hahn Auto Aftermarket Parts &copy; 2021</span></FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
}

export default Footer;
