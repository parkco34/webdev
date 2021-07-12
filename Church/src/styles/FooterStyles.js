import React from 'react';
import styled from 'styled-components';

export const Box = styled.div`
	padding: 80px 60px;
	background: black;
	position: absolute;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
`;

export const FooterLink = styled.a`
	color: #FAFAFA;
	margin-bottom: 20px;
	font-size: 16px;
	text-decoration: none;

	&:hover {
		color: white;
		transition: 200ms ease-in;
	}

	& > .label-txt {
		width: 250px;
	}
`;

export const Heading = styled.p`
	font-size: 22px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;
