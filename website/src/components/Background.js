import React, {Component} from 'react';
import './Background.css';
import Roc1 from '../images/RocSky1.jpg';
import Navbar from './Header/Navbar';

class Background extends Component {

    render() {
        return (
            <div className="Background" style={{backgroundImage: `url(${Roc1})`}}>
                <Navbar />
                <div className="background-content">
                    <p>Get the damn website done!</p>
                </div>
            </div>
        );
    }
}

export default Background;
