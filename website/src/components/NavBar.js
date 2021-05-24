import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import { Link } from 'react-router-dom';
import universe from '../myImages/subImages/dodecahedron.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "up"
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
                className={styles.spacer}
                style={{backgroundColor:
                        this.state.status === "up" ?
                        "transparent" : "#fc1d0d",
                        position: "fixed",
                        transition: "all 0.5s",
            }}>
                <div className={styles.navbar}>
                    <span className={styles.signature} ><img src={universe} id="Nav-logo"/></span>
                    <Link to="/"><span className={styles.navbtn}>Home</span></Link>
                    <Link to="/about"><span className={styles.navbtn}>About</span></Link>
                    <Link to="/join"><span className={styles.navbtn}>Join</span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;

