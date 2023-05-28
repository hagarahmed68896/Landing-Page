import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import ca from './images/011.jpg';
import ca1 from './images/002.jpg';
import ca2 from './images/018.jpg';
import ca3 from './images/005.jpg';
import ca4 from './images/021.jpg';
import ca5 from './images/016.jpg';
import ca6 from './images/006.jpg';
import ca7 from './images/013.jpg';

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Swip = () =>{
  const slides = [];

  // for (let i = 0; i < 12; i++) {
  //   slides.push(
  //     <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }} className="sb">
  //       <div className="slide">
  //         {/* <h3>{i}</h3> */}
        
  //         {/* <div> <img key={`slide-${2}`} src={ca}  title="logo" className="ca"/></div> */}
  //         {/* <img src={ca}  title="logo" className="ca"/> */}
  //       </div>
  //     </SwiperSlide>
  //   );
  // }
    return( 
      <div className="container swipe ">
      <Swiper
      id="swiper"
      virtual
      slidesPerView={5}
      spaceBetween={30}
      slidesPerGroup={5}
      // autoplay
      loop
      navigation
      pagination
    >
      {/* {slides} */}
      <SwiperSlide>
      <Card style={{ width: '18rem', border: '1px white solid' }}>
      <Card.Img variant="top" src={ca} />
      <Card.Body>
    
        <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
     
      </Card.Body>
    </Card>
     </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca1} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
      
      </Card.Body>
    </Card>
        </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca2} />
      <Card.Body>
   
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca3} />
      <Card.Body>
     
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
      
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca4} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
      
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca5} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
     
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca6} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
    
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca7} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
       
      </Card.Body>
    </Card>
        </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
  
      </Card.Body>
    </Card>
       </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top" src={ca1} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
      </Card.Body>
    </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card style={{ width: '18rem',border: '1px white solid' }}>
      <Card.Img variant="top"  src={ca2} />
      <Card.Body>
      <Card.Text>
        <div class="ps-product__content">
                                            <h5 class="ps-product__title">Product name</h5>
                                            <p class="par-cate">Category name</p>
                                            <div class="ps-product__meta">
                                                <span class="ps-product__price sale">$60.39</span>
                                                <span class="ps-product__del">$89.99</span>
                                            </div>
                
                                         
                                        </div>
        </Card.Text>
      
      </Card.Body>
    </Card>
    </SwiperSlide>
    </Swiper>
    </div>
        )
        
    }
    export default Swip;