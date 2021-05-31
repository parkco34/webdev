import React, {Component} from 'react';
import SocialFollow from './SocialFollow';

export default class TheFooter extends Component {
    render() {
        return (
            <div className="Footer">
               <div>
                    <SocialFollow />
                </div>
            </div>
        );
    }
}
