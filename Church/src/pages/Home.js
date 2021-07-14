import React from 'react';
import Test from '../components/Test';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import theImage from '../Images/last_supper.jpg';

const Main = {
    Wrapper: styled.main`
        display: flex;
        justify-content: center;
        background: ${props => `url(${props.backgroundImage})`};
        background-size: cover;
        background-position: 50% 75%;
        background-repeat: no-repeat;
        background-color: transparent;
        overflow: hidden;
		position: absolute;
		height: 100vh;
		top: 0;
		right: 0;
		left: 0;
    `,
	Foot: styled.div`
		position: absolute;
		width: 100%;
		bottom: 0;
	`,
}

function Home() {
    return (
        <div className="Main" >
            <Main.Wrapper backgroundImage={theImage}>
                <Test Top="15%" Left="25%" Color="white"/>
            </Main.Wrapper>
			<Main.Foot className="footer">
				<Footer />
			</Main.Foot>
		</div>
    );
}

export default Home;

