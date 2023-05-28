import React from "react";
import ca from './images/bg-banner4.jpg';
import ca1 from './images/bg-banner5.jpg';

const Feature = () => {
  return (
    <div className="container feature" style={{ height: "200px" }}>
      <div className="row feature" style={{ position: "relative" }}>
        <div className="col md-6 pa">
          <div class="content2" style={{ marginBottom: "20px", position: "absolute", top: "120px", left:"590px" }}>
            <span class="ps-promo__badge" style={{ color: "#fd6535", fontWeight: "bold" }}>New</span>
            <h4 class="ps-promo__name" style={{ color: "rgb(46, 188, 194)" }}>Get rid of bacteria <br />in your home</h4>
            <a class="ps-promo__btn" href="#">More</a>
          </div>
          <img src={ca} title="logo" className="fimg" style={{ marginTop: "20px" }} />
        </div>
        <div className="col md-6">
          <div class="content3" style={{ position: "absolute", top: "120px", left:"20px" }}>
            <span class="ps-promo__badge" style={{ color: "#fd6535", fontWeight: "bold" }}>New</span>
            <h4 class="mb-20 ps-promo__name" style={{ color: "rgb(46, 188, 194)" }}>Get rid of bacteria <br />in your home</h4>
            <a class="ps-promo__btn" href="#">More</a>
          </div>
          <img src={ca1} title="logo" className="fimg" style={{ marginTop: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default Feature;
