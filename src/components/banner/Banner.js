import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Banner.css"

export default function Banner(props) {
    const transitionTime = props.transitionTime + '5s';


 return  (
  <Carousel transitionTime={transitionTime}>
    <div className="slides">
      <img alt="" src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
      <div className="inner_banner" >
        <h5>SONY LAPTOP 2022</h5>
        <h1>New Arrival Sale</h1>
        <p>It Is A Long Established Fact That A Reader Will Be That Distracted By The Readable Content Of A Page When In Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A Adablemore-Or-Less Normal...</p>
    <button style={{background:"white"}}>SHOP NOW</button>
    </div>
    </div>
    <div className="slides">
      <img alt="" src="https://images1.mobilissimo.ro/jpq/61dc1ed2bb715.jpg"/>
      <div className="inner_banner" >
        <h5>SONY MOBILE 2022</h5>
        <h1>New Arrival Sale</h1>
        <p>It Is A Long Established Fact That A Reader Will Be That Distracted By The Readable Content Of A Page When In Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A Adablemore-Or-Less Normal...</p>
    <button style={{background:"white"}}>SHOP NOW</button>
    </div>
    </div>
  </Carousel>
);
}