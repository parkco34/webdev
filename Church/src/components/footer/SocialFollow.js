import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

export default function SocialFollow() {
    return (
        <div>
            <div className="spacer"></div>

            <div className="social-container">
                <div className="social-sub-container">
                    <div className="the-social">
                        <span>Lakeville United Church of Christ 2021</span>
                        <div className="social-container">
                            <a href="https://www.facebook.com/parkercorya" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

