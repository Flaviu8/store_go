import React from "react";
import Swiper from "../swiper/Swiper";

function SwiperFinal() {
  const slides = [
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    <div>Slide 3</div>,
    <div>Slide 4</div>,
  ];

  return (
    <div style={{display: "flex"}}>
      <h1>My Swiper</h1>
      <Swiper slides={slides} />
    </div>
  );
}

export default SwiperFinal;
