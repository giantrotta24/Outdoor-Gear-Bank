import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../pages/images/Camping.jpg';
import image2 from '../pages/images/North-Bend-Park-Campground.jpg';
import image3 from '../pages/images/192533.jpg'; 


export default () => (
    <Carousel 
        autoPlay 
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop
        swipeable={false}
        transitionTime={500}>
        <div>
            <img src={image1} />
            
        </div>
        <div>
            <img src={image2} />
            
        </div>
        <div>
            <img src={image3} />
            
        </div>
    </Carousel>
);
