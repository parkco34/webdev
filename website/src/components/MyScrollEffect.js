import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Div = styled.div`
	height: ${props => props.Height || "450px"};
	width: ${props => props.Width || "450px"};
	background-repeat: no-repeat;
	background: ${props => url(props.backImage) || props.bkColor === props.backColor || "white"};
	tranform: translateY(${({animate}) => (animate ? "-46vh" : "0")});
	transition: transform 1s;
	margin: 20px;
	opacity: ${({props}) => props.fadePercent ? `${props.fadePercent / 100}` : `1`};
`;

const MyScrollEffect = props => {
	const [show, setShow] = useState({
		itemOne: false,
		itemTwo: false,
	});
	const [percentShow, setPercentShow] = useState({
		itemOne: 0,
		itemTwo: 0,
	});
	const myRef = useRef(null),
		otherRef = useRef(null);

	useLayoutEffect(() => {
		const topPos = element => element.getBoundingClientRect().top;
		const getHeight = element => element.offsetHeight;
		const divPos = topPos(myRef.current),
			otherDivPos = topPos(otherRef.current);

		const otherDivHeight = getHeight(otherRef.current);

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			if (divPos < scrollPos) {
				setShow(state => ({...state, itemOne: true}));
			}

			if (otherDivPos < scrollPos) {
				setShow(state => ({...state, itemTwo: true}));

				let itemTwoPercent = ((srollPos - otherDivPos) * 100) / otherDivHeight;
				if (itemTwoPercent > 100) itemTwoPercent = 100;
				if (itemTwoPercent < 0) itemTwoPercent = 0;

				setPercentShow(prevState => ({
					...prevState,
					itemTwo: itemTwoPercent
				}));
			}
			else if (otherDivPos > scrollPos) {
				setShow(state => ({...state, itemTwo: false}));
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<Wrapper>
				<Div
					animate={show.itemOne}
					animatePercent={percentShown.itemOne}
					ref={myRef}
					backImage={props.backImage}
					backColor={props.backColor}
					Width={props.Width}
					Height={props.Height}
				>
				</Div>
			</Wrapper>			
		</>
	);
}
