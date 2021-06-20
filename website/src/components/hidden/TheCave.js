import React, {useState, useEffect} from 'react';
import image from '../../myImages/excitedme.jpg';
import styled from 'styled-components';

const GuessWho = styled.Div`
    width: 100vw;
    height: auto;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TheCave = () => {
    return (
        <div>
            <GuessWho className="img-container">
                <img src={image} alt="">
            </div>
        </GuessWho>
    );
}
