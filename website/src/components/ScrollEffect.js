import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components';
import image1 from '../Images/reality_dilation.gif';
import image2 from '../Images/red_rainbow.jpg';
import image3 from '../Images/holyshit1.jpg';
import defaultImage from '../Images/bengal1.jpg';

const Div = styled.div`
	height: ${props => props.Height || "600px"};
	width: ${props => props.Width || "600px"};
	background-repeat: no-repeat;
	background-image: url(${props => props.bkImage || defaultImage});
	transform: translateY(${({animate}) => (animate ? "-46vh" : "0")});
	transition: transform 1s;
	margin: 20px;
	opacity: ${({animatePercent}) =>
		animatePercent ? `${animatePercent / 100}` : `1`};
`;

const Wrapper = styled.div`
	margin-top: 100vh;
	display: flex;
	align-items: center;
`;

const ScrollEffect = props => {
	const [show, setShow] = useState({
		itemOne: false,
		itemTwo: false,
		itemThree: false,
	});
	const [percentShown, setPercentShow] = useState({
		itemOne: 0,
		itemTwo: 0,
		itemThree: 0,
	});
	const ourRef = useRef(null),
		anotherRef = useRef(null),
		lastRef = useRef(null);

	useLayoutEffect(() => {
		const topPos = element => element.getBoundingClientRect().top;
		const getHeight = element => element.offsetHeight;
		const div1Pos = topPos(ourRef.current),
			div2Pos = topPos(anotherRef.current),
			div3Pos = topPos(lastRef.current);

		const div3Height = getHeight(lastRef.current);

		const onScroll = () => {
			const scrollPos = window.scrollY + window.innerHeight;

			if (div1Pos < scrollPos) {
				setShow(state => ({...state, itemOne: true}));
			}

			if (div2Pos < scrollPos) {
				setShow(state => ({...state, itemTwo: true}));
			}
			
			if (div3Pos < scrollPos) {
				setShow(state => ({...state, itemThree: true}));

				let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height;
				if (itemThreePercent > 100) itemThreePercent = 100;
				if (itemThreePercent < 0) itemThreePercent = 0;

				setPercentShow(prevState => ({
					...prevState,
					itemThree: itemThreePercent
				}));
			}
			else if (div3Pos > scrollPos) {
				setShow(state => ({...state, itemThree: false}));
			}
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<>
			<Wrapper>
				<Div 
					animate={show.itemThree}
					animatePercent={percentShown.itemThree}
					ref={lastRef}
					bkImage={props.Img3}
					Width={props.Width}
					Height={props.Height}
				>
					<p>What</p>
					<p>to put</p>
					<p>right here?</p>
				</Div>
				<Div 
					animate={show.itemTwo} 
					ref={anotherRef} 
					bkImage={props.Img2}
					Width={props.Width}
					Height={props.Height}
				/>
				<Div 
					animate={show.itemOne} 
					ref={ourRef} 
					bkImage={props.Img1}
					Width={props.Width}
					Height={props.Height}
				/>
			</Wrapper>
		</>
	);
}

export default ScrollEffect;
