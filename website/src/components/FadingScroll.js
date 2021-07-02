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
	background-image: url(${props => props.backImage});
	transform: translateY(${({animate}) => (animate ? "-46vh" : "0")});
	transition: transform 1s;
	margin: 500px;
	opacity: ${({animatePercent}) => animatePercent ? `${animatePercent / 100}` : `1`};
	z-index: 1;
`;

const FadingScroll = props => {
	const [show, setShow] = useState({
		item: false,
	});
	const [percentShow, setPercentShow] = useState({
		item: 0,
	});
	const otherRef = useRef(null);

	useLayoutEffect(() => {
		const topPos = element => element.getBoundingClientRect().top;
		const getHeight = element => element.offsetHeight;
		const otherDivPos = topPos(otherRef.current);

		const otherDivHeight = getHeight(otherRef.current);

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			if (otherDivPos < scrollPos) {
				setShow(state => ({...state, item: true}));

				let itemPercent = ((scrollPos - otherDivPos) * 100) / otherDivHeight;
				if (itemPercent > 100) itemPercent = 100;
				if (itemPercent < 0) itemPercent = 0;

				setPercentShow(prevState => ({
					...prevState,
					item: itemPercent
				}));
			}
			else if (otherDivPos > scrollPos) {
				setShow(state => ({...state, item: false}));
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<Wrapper>
				<Div
					animate={show.item}
					animatePercent={percentShow.item}
					ref={otherRef}
					backImage={props.backImage}
					Width={props.Width}
					Height={props.Height}
				/>
			</Wrapper>			
		</>
	);
}

export default FadingScroll;

