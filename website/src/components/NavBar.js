import React from 'react';
import { Link } from 'react-router-dom';
import universe from '../myImages/subImages/dodecahedron.png';

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "up",
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
                className={this.props.theStyle.spacer}
                style={{backgroundColor:
                        this.state.status === "up" ?
                        "transparent" : "white",
                        position: "fixed",
                        transition: "all 0.5s",
            }}>
                <div className={this.props.theStyle.navbar}>
                    <span className={this.props.theStyle.signature} ><img src={universe} id="Nav-logo"/></span>
                    <Link to="/"><span
                                    style={{
                                        color:
                                        this.state.status === "up" ?
                                        this.props.up : this.props.down
                                    }}
                                    className={
                                        this.state.status === "up" ?
                                        this.props.theStyle.navbtn1 :
                                        this.props.theStyle.navbtn2

                                    }
                    >
                        Home
                    </span></Link>
                    <Link to="/about"><span
                                        style={{
                                            color:
                                            this.state.status === "up" ?
                                            this.props.up : this.props.down
                                        }}
                                        className={
                                            this.state.status === "up" ?
                                            this.props.theStyle.navbtn1 :
                                            this.props.theStyle.navbtn2
                                        }
                    >
                        About
                    </span></Link>
                    <Link to="/join"><span
                                        style={{
                                            color:
                                            this.state.status === "up" ?
                                            this.props.up : this.props.down
                                        }}
                                        className={
                                            this.state.status === "up" ?
                                            this.props.theStyle.navbtn1 :
                                            this.props.theStyle.navbtn2
                                        }
                    >
                        Join
                    </span></Link>

                    <Link to="/intro"><span
                                        style={{
                                            color:
                                            this.state.status === "up" ?
                                            this.props.up : this.props.down
                                        }}
                                        className={
                                            this.state.status === "up" ?
                                            this.props.theStyle.navbtn1 :
                                            this.props.theStyle.navbtn2
                                        }
                    >
                        Intro
                    </span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;
