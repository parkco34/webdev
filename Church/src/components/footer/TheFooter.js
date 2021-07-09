import React, {Component} from 'react';
import SocialFollow from './SocialFollow';
import styled from 'styled-components';

const Foot = {
	Loose: styled.div`
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
		background-color: black;
		z-index: 2;
	`,
};

export default class TheFooter extends Component {
    render() {
        return (
            <Foot.Loose>
               <div>
                    <SocialFollow />
                </div>
            </Foot.Loose>
        );
    }
}

