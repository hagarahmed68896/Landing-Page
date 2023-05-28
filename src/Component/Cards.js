import React from "react";
import { Card, } from 'react-bootstrap';
import ca4 from './images/bg-banner1.jpg';
import ca5 from './images/bg-banner2.jpg';
import ca6 from './images/bg-banner3.jpg';


const Cards = () =>{
    return( 
      <div className="container">
        <div class="row">
        <div className="col md-3 ">
        <Card style={{ width: '22rem', border:"none" }} className="card" >
      <Card.Img variant="top" src={ca4} className="card3"/>
      <div class="ps-promo__content">
                                        <h4 class="text-white ps-promo__name">Product name</h4>
                                        <div class="ps-promo__meta">
                                            <p class="ps-promo__price">$119.00</p>
                                            <p class="ps-promo__del">$129.00</p>
                                        </div>
                                        <a class="ps-promo__btn" href="#">Shop now</a>
                                    </div>
   
    </Card>
    </div>
    <div className="col md-3">
        <Card style={{ width: '22rem', border:"none" }} className="card">
      <Card.Img variant="top" src={ca5} className="card3"/>
      <div class="ps-promo__content">
                                        <h4 class="text-white ps-promo__name">Product name</h4>
                                        <div class="ps-promo__meta">
                                            <p class="ps-promo__price">$119.00</p>
                                            <p class="ps-promo__del">$129.00</p>
                                        </div>
                                        <a class="ps-promo__btn" href="#">Shop now</a>
                                    </div>
    </Card>
    </div>
    <div className="col md-3">
        <Card style={{ width: '22rem' , border:"none"}} className="card">
      <Card.Img variant="top" src={ca6} className="card3"/>
      <div class="ps-promo__content">
                                        <h4 class="text-white ps-promo__name">Product name</h4>
                                        <div class="ps-promo__meta">
                                            <p class="ps-promo__price">$119.00</p>
                                            <p class="ps-promo__del">$129.00</p>
                                        </div>
                                        <a class="ps-promo__btn" href="#">Shop now</a>
                                    </div>
    </Card>
    </div>
    </div>
    </div>


        )
        
    }
    export default Cards;