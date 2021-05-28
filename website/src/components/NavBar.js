import React from 'react';
import styles1 from '../cssModules/NavBar.module.css';
import styles2 from '../cssModules/NavBar2.module.css';
import { Link } from 'react-router-dom';
import universe from '../Images/subImages/dodecahedron.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "up",
			styling: styles1,
        };
    }

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            const scrolled = document.scrollingElement.scrollTop;

            if (scrolled >= 120) {
                if (this.state.status !== "down") {
                    this.setState({status: "down"});
                }
            }

            else {
                if (this.state.status !== "up") {
                    this.setState({status: "up"});
                }
            }
        });
    }

    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {
        return (
            <div
                className={this.state.styling.spacer}
                style={{backgroundColor:
                        this.state.status === "up" ?
                        "transparent" : "white",
                        position: "fixed",
                        transition: "all 0.5s",
            }}>
                <div className={this.state.styling.navbar}>
                    <span className={this.state.styling.signature} ><img src={universe} id="Nav-logo"/></span>
                    <Link to="/"><span className={this.state.styling.navbtn}>Home</span></Link>
                    <Link to="/about"><span className={this.state.styling.navbtn}>About</span></Link>
                    <Link to="/join"><span className={this.state.styling.navbtn}>Join</span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
