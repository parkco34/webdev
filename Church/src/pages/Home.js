import React from 'react';
import Test from '../components/DeleteMe';
import styled from 'styled-components';
import Footer from '../footer/Footer';
import theImage from '../Images/last_supper0.JPG';

const Main = {
    Wrapper: styled.main`
        display: flex;
        justify-content: center;
        background: ${props => `url(${props.backgroundImage})`};
        background-size: cover;
        background-position: 50% 75%;
        background-repeat: no-repeat;
        max-width: 100vw;
        max-height: 100vh;
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: transparent;
        z-index: -1;
        overflow: hidden;
		position: relative;
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
                <Test />
            </Main.Wrapper>
			<Main.Foot className="footer" style={{border: '1px dashed pink', color: 'limegreen'}}>
				<Footer />
			</Main.Foot>
		</div>
    );
}

export default Home;
