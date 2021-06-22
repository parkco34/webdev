import React, {useState, useRef, useLayoutEffect} from 'react';
import styled from 'styled-components';
import image1 from '../myImages/reality_dilation.gif';
import image2 from '../myImages/red_rainbow.jpg';
import image3 from '../myImages/holyshit1.jpg';
import defaultImage from '../myImages/bengal1.jpg';

const Div = styled.div`
	height: auto;
	width: 600px;
	background-image: url(${props => props.bkImage || defaultImage});
	background-repeat: no-repeat;
	transform: translateY(${({animate}) => (animate ? "0" : "-100vh")});
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
			const scrollPos = window.scrollY + window.innerheight;

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
				if (itemThreePercent > 0) itemThreePercent = 0;

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
				>
					<p>What</p>
					<p>to put</p>
					<p>right here?</p>
				</Div>
				<Div animate={show.itemTwo} ref={anotherRef} bkImage={props.Img2}/>
				<Div animate={show.itemOne} ref={ourRef} bkImage={props.Img1}/>
			</Wrapper>
		</>
	);
}

export default ScrollEffect;
