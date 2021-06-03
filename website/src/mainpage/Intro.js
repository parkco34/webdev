import React, {Component} from 'react';
import Carousel, {CarouselItem} from './Carousel';

export default class Intro extends Component {
    render() {
        return (
			<div className="Intro">
				<div >
					<Carousel >
						<CarouselItem>Item1</CarouselItem>
						<CarouselItem>Item2</CarouselItem>
						<CarouselItem>Item3</CarouselItem>
					</Carousel>
				</div>
			</div>
        );
    }
}
