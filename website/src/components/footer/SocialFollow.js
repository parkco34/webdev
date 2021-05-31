import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css';

export default function SocialFollow() {
    return (
        <div>
            <div className="spacer"></div>

            <div className="social-container">
                <div className="social-sub-container">
                    <div className="the-social">
                        <span>ParkDaddy Inc. &copy; 2021</span>
                        <div className="social-container">
                            <a href="https://www.youtube.com/channel/UCe7f1f9FWBJ2fNzvRbWEnBw/videos" className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>

                            <a href="https://www.facebook.com/parkercorya" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>

                            <a href="https://twitter.com/CoryPar12955525" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>

                            <a href="https://www.instagram.com/parkerdaddy34/" className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
