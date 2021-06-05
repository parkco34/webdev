import React, {useState, useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import image1 from '../myImages/ascension.webp';
import image2 from '../myImages/wokey.webp';
import image3 from '../myImages/water_offering.jpg';
import MandroidBB from '../comps/MandroidBB.css';

const images = [image1, image2, image3];

const useStyles = makeStyles({
    root: {
        fontFamily: 'MandroidBB',
        overflow: 'hidden',

        '& .container':{
            width: '100vw',
            minHeight: '100vh',
            padding: '0 1.5rem',
            boxSizing: 'border-box',
            zIndex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },

        '& .image': {
            position: 'absolute',
            left: '0',
            top: '0',
            overflow: 'hidden',
            display: 'block',
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            transition: 'opacity 1s ease',
            opacity: '0',
        },

        '& .active': {
            opacity: '1',
        },
    },
});

function Carousel(props) {
    const classes = useStyles();
    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
      const pictureInterval = setInterval(() => {
          setCurrentPicture((currentPicture + 1) % images.length); // change current slide to next after 3s
        }, 3000);

        return () => {
          clearInterval(pictureInterval)
        }
    });

    return (
        <div>
            <div className={classes.root}>
                <div className="container">
                    {images.map((image, index) => (
                        <img
                            src={image}
                            className={index === currentPicture ? 'image active' : 'image'}
                            id={index}
                            key={index}
                            style={{zIndex: `-${index + 1}`, width: '100%', height: '100%', overflow: 'hidden'}}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
