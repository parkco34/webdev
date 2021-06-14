import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import image1 from '../myImages/robot1.webp';
import image2 from '../myImages/robot2.webp';
import image3 from '../myImages/robot3.webp';
import image4 from '../myImages/devil.webp';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0,
    },
});

const DeleteMe = () => {
    return (
        <div className="DeleteMe">
            <div className="section1">
                <img src={image1} className="num1" alt="No Image Found!"/>
                <img src={image2} className="num2" alt="No Image Found!"/>
                <img src={image3} className="num3" alt="No Image Found!"/>

                <div className="hi">[HI]</div>
            </div>

            <div className="section2">
                <svg className="svg_curve_top" fill="orange" viewbox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0, 100 C65, 93 76, 10 100, 100" />
                </svg>
                <div className="section2_container">
                    <div className="left_side">
                        I'm not wearing any hockey pads!
                    </div>

                    <div className="rigth_side">
                        <img src={image4} alt="No Image Found Here!" />
                    </div>
                </div>
                <svg className="svg_curve_bottom" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100" preserveAspectRatio="none">
                    <path d="M0, 0 C65, 20 90, 5 100, 0" />
                </svg>
            </div>

            <div className="section3">
                Sign my balls after you kiss my ass and order me sesame tofu in motha fuckin peanut sauce!
                <input className="input_email" type="text" name="email" id="email" />
                <div className="contacts">
                    <section className="contact_section">
                        <ul>
                            <li>Flavors of Asia</li>
                        </ul>
                    </section>

                    <section className="contact_section">
                        <ul>
                            <li>Roc Sushi</li>
                        </ul>
                    </section>

                    <section className="contact_section">
                        <ul>
                            <li>King and I</li>
                        </ul>
                    </section>
					
                    <section className="contact_section">
                        <ul>
                            <li>South Eastern Asian Restaurant</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default DeleteMe;
