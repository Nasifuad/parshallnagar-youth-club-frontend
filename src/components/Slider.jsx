import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { award, prize, prize2, drug, football } from "../assets";

export default function PerspectiveSlider() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const images = [award, prize, prize2, drug, football];
  const captions = ["Award", "Prize", "Prize", "Drug", "Football"];
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full h-[600px] relative overflow-hidden  py-16">
      {/* Main Slider */}
      <Slider ref={sliderRef} {...settings} className="h-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="px-2 transition-all duration-500 h-[500px]" // Fixed card height
            style={{
              zIndex: index === activeSlide ? 20 : 10,
            }}
          >
            <div
              className="relative h-full w-full overflow-hidden rounded-xl shadow-2xl"
              style={{
                transform: index === activeSlide ? "scale(1)" : "scale(0.85)",
                transformStyle: "preserve-3d",
                transition: "transform 500ms ease",
              }}
            >
              <img
                src={src}
                alt={`slide-${index}`}
                className="w-full  h-full object-cover absolute inset-0"
                style={{
                  transform:
                    index < activeSlide
                      ? "perspective(1000px) rotateY(12deg) translateX(30px)"
                      : index > activeSlide
                      ? "perspective(1000px) rotateY(-12deg) translateX(-30px)"
                      : "perspective(1000px) rotateY(0deg)",
                  transition: "transform 500ms ease",
                }}
              />
              <div
                className={`absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center transition-all duration-500 ${
                  index === activeSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {captions[index]}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-md transform hover:scale-105 transition-all"
        >
          {/* Arrow SVG remains same */}
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="px-6 py-2 bg-white/20 hover:bg-white/30 rounded-md transform hover:scale-105 transition-all"
        >
          {/* Arrow SVG remains same */}
        </button>
      </div>
    </div>
  );
}
