import React,  { useState } from 'react';
import "./Swiper.css";
import ArrowIcon from "../../icons/arrow-right.svg";

export default function Swiper() {
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  const handleClickLeft = () => {
    setSlideLeft(!slideLeft);
  };

  const handleClickRight = () => {
    setSlideRight(!slideRight);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - event.currentTarget.offsetLeft);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setCurrentX(event.pageX - event.currentTarget.offsetLeft);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      if (currentX - startX > 50) {
        setSlideLeft(true);
      } else if (startX - currentX > 50) {
        setSlideRight(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  console.log(slideLeft);

  return (
    <div>
      <div className="top_category_main">
        <h1>Top Category</h1>
        <div className="buttons">
          <button onClick={handleClickLeft} className="arrow_left">
            <img src={ArrowIcon} alt="" />
          </button>
          <button onClick={handleClickRight}>
            <img src={ArrowIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="top_category_line">
        <span className="blue_line"></span>
        <span className="normal_line"></span>
      </div>
      <div
        className="swiper_container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={slideLeft || currentX - startX > 50 ? "swiper" : null}
          id={slideRight ? "swipers" : null}
        >
          <img src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
        </div>
        <div
          className={slideLeft ? "swiper" : null}
          id={slideRight ? "swipers" : null}
        >
          <img src="https://img2.goodfon.com/original/1600x900/f/ae/noutbuk-sony-chernyy-fon.jpg" />
        </div>
      </div>
    </div>
  );
}

