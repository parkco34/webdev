import React from 'react';
import Test from '../components/Test';
import styled from 'styled-components';
import TheFooter from '../footer/TheFooter';
import theImage from '../Images/last_supper.jpg';

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
    `,
}

function Home() {
    return (
        <div className="Main" >
            <Main.Wrapper backgroundImage={theImage}>
                <Test />
            </Main.Wrapper>
            <TheFooter />
        </div>
    );
}

export default Home;
