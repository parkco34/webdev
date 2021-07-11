import React, {Component} from 'react';
import SocialFollow from './SocialFollow';

export default class TheFooter extends Component {
    render() {
        return (
            <div className="Footer">
               <div className="foot-container" style={{position: 'relative'}}>
                    <SocialFollow />
                </div>
            </div>
        );
    }
}

