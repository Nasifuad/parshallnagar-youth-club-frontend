import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { award, prize, prize2, drug, football } from "../assets";
export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const images = [award, prize, prize2, drug, football];
  return (
    <div className="container mx-auto py-12">
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx} className="px-2">
            <img
              src={src}
              alt={`slide-${idx}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
