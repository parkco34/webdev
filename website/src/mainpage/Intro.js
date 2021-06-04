import React, {Component} from 'react';
import Carousel, {CarouselItem} from './Carousel';
import image1 from '../Images/astronaut2.jpg';
import image2 from '../Images/astronaut.jpg';
import image3 from '../Images/monolith.jpg';

class Intro extends Component {
    render() {
        return (
			<div className="Intro">
				<div >
					<Carousel >
						<CarouselItem >
							<img 
								src={`${image1}`} 
								alt="IMAGE NOT FOUND"
								id="image1"
								style={{width: '100%', height: '100%'}}
							/>
						</CarouselItem>
						<CarouselItem >
							<img 
								src={`${image2}`} 
								alt="IMAGE NOT FOUND"
								style={{width: '100%', height: '100%'}}
							/>
						</CarouselItem>
						<CarouselItem >
							<img 
								src={`${image3}`} 
								alt="IMAGE NOT FOUND"
								style={{width: '100%', height: '100%'}}
							/>
						</CarouselItem>
					</Carousel>
				</div>
			</div>
        );
    }
}

export default Intro;
