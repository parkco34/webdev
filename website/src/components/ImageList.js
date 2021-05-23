	import React, { Component } from 'react';
import '../cssModules/ImageList.module.css';
import image1 from '../myImages/depression1.webp';
import image2 from '../myImages/me_henri1.jpg';
import image3 from '../myImages/gay_boyz.jpg';
import image4 from '../myImages/scary1.webp';
import image5 from '../myImages/me_gringo1.jpg';
import image6 from '../myImages/scary3.webp';

class ImageList extends Component {
    render() {
        const photos = [image1, image2, image3, image4, image5, image6];

        const images = photos.map(image => {
            return <img src={image} style={{width: '100%', height: 'auto'}} key={image.toString()} alt="No Image Found" />
        });

        return (
            <div className="container">
               <div className="sub-container">
                    <h2>Some Mothafuckin Text!</h2>
                </div>
                <div className="image-list">
                    {images}
                </div>
            </div>
        );
    }
}

export default ImageList;
