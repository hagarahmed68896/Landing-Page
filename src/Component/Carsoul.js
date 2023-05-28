import React from "react";
import { Carousel } from 'react-bootstrap';
import ca from './images/slider-2.jpg';
import ca2 from './images/slider-3.jpg';
import ca3 from './images/slider-1.jpg';

const Carsoul = () =>{
    return( 
        <Carousel className="cas" variant="dark">
      <Carousel.Item>
      <img src={ca} title="logo" className="ca"/>
    
      </Carousel.Item>
      <Carousel.Item>
      <img src={ca2} title="logo" className="ca"/>

       
      </Carousel.Item>
      <Carousel.Item>
      <img src={ca3} title="logo" className="ca"/>

      
      </Carousel.Item>
    </Carousel>
        )
        
    }
    export default Carsoul;