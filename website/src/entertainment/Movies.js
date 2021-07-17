import React from 'react';
import styled from 'styled-components';

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    max-width: 100vw;
`;

const Movies = props => {
    return (
        <Top>
            <p>Hello, Friend...</p>
        </Top>
    );
};

export default Movies;
