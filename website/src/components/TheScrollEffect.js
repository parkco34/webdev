import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const Div = styled.div`
	height: ${props => props.Height || "450px"};
	width: ${props => props.Width || "450px"};
	background-repeat: no-repeat;
	background-image: url(${props => props.backImage});
	transform: translateY(${({animate}) => (animate ? "-46vh" : "0")});
	transition: transform 1s;
	margin: ${props => props.Margin || "450px"};
	opacity: ${({animatePercent}) => animatePercent ? `${animatePercent / 100}` : `1`};
	z-index: 1;
`;

const ThecScrollEffect = props => {
	const [show, setShow] = useState({
		itemOne: false,
	});
	const [percentShow, setPercentShow] = useState({
		itemOne: 0,
	});
	const myRef = useRef(null);

	useLayoutEffect(() => {
		const topPos = element => element.getBoundingClientRect().top;
		const getHeight = element => element.offsetHeight;
		const divPos = topPos(myRef.current);

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			if (divPos < scrollPos) {
				setShow(state => ({...state, itemOne: true}));
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
					animatePercent={percentShow.itemOne}
					ref={myRef}
					backImage={props.backImage}
					Width={props.Width}
					Height={props.Height}
					Margin={props.Margin}
				>
					<p>Hello</p>
					<p>Frend...</p>
					<p>we've been waiting for you.</p>
				</Div>
			</Wrapper>			
		</>
	);
}

export default ThecScrollEffect;

