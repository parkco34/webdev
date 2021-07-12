import React from 'react';
import styled from 'styled-components';

export const Box = styled.div`
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
	text-align: right;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
`;

export const FooterLink = styled.a`
	color: #FAFAFA;
	margin-bottom: 20%;
	font-size: 16px;
	text-decoration: none;

	&:hover {
		color: white;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 22px;
	color: #fff;
	margin-bottom: 40px;
	font-weight: bold;
`;

export const Text = styled.p`
	width: 250px;
	text-align: center;
	margin: auto 0 auto 0;
	color: #FAFAFA;
`;
