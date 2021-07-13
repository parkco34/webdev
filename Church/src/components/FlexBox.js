import React from 'react';
import styled from 'styled-components';

const Flex = {
	Container: styled.ul`
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		padding: 0;
		margin: 0;
		list-style: none;
	`,
	Navigation: styled.ul`
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-end;
		list-style: none;
		margin: 0;
		background: deepskyblue;

		@media all and (max-width: 800px) {
			jusitfy-content: space-around;
		}

		@media all and (max-width: 600px) {
			flex-direction: column;
			flex-flow: column wrap;
			padding: 0;
		}
	`,
	Child1: styled.li`
		background: orange;
		padding: 5px;
		width: 200px;
		height: 150px;
		margin-top: 10px;
		line-height: 150px;
		color: white;
		font-weight: bold;
		font-size: 3em;
		text-align: center;
	`,
	Child2: styled.li`
		text-decoration: none;
		display: block;
		padding: 1em;
		color: white;

		&:hover {
			background: #1565c0;
		}

		@media all and (max-width: 600px) {
			text-align: center;
			padding: 10px;
			border-top: 1px solid rgba(255, 255, 255, 0.3);
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);

			&:last-of-type {
				border-bottom: none;
			}
		}
	`,
};

const FlexBox = () => {
	return (
		<div>
			<Flex.Container>
				<Flex.Child1>1</Flex.Child1>
				<Flex.Child1>2</Flex.Child1>
				<Flex.Child1>3</Flex.Child1>
				<Flex.Child1>4</Flex.Child1>
				<Flex.Child1>5</Flex.Child1>
			</Flex.Container>
			<hr/>
			<Flex.Navigation>
				<Flex.Child2>Home</Flex.Child2>
				<Flex.Child2>About</Flex.Child2>
				<Flex.Child2>Join</Flex.Child2>
				<Flex.Child2>Products</Flex.Child2>
				<Flex.Child2>Contact</Flex.Child2>
			</Flex.Navigation>
		</div>
	);
}

export default FlexBox;
