import React from 'react';
import styles from '../cssModules/NavBar.module.css';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className={styles.spacer}>
                <div className={styles.navbar}>
                    <p className={styles.signature}>UCC</p>
                    <Link to="/" style={{ textDecoration: 'none' }}><span className={styles.navbtn}>Btn 1</span></Link>
                    <Link to="/about" style={{textDecoration: 'none'}}><span className={styles.navbtn}>Btn 2</span></Link>
                    <Link to="/join" style={{textDecoration: 'none'}}><span className={styles.navbtn}>Btn 3</span></Link>
                </div>
            </div>
        );
    }
}

export default NavBar;

