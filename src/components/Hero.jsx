import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import shopImage from "../assets/public/11.jpeg";
import heroImage from "../assets/public/12.jpeg";
import image1 from "../assets/public/13.jpeg";
import shop2 from "../assets/public/14.jpeg";
import shop3 from "../assets/public/15.jpeg";
import shop4 from "../assets/public/16.jpeg";

const images = [
  { src: shopImage, alt: "Shop Front" },
  { src: heroImage, alt: "Workstation Laptop" },
  { src: image1, alt: "Workstation Laptop" },
  { src: shop2, alt: "Modern Computer Setup" },
  { src: shop3, alt: "Modern Computer Setup" },
  { src: shop4, alt: "Modern Computer Setup" },

  { src: image1, alt: "Modern Computer Setup" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      3000,
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-black px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 md:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <span className="mx-auto inline-flex rounded-full border border-gray-700 px-3 py-1 text-[20px] font-bold uppercase tracking-widest text-gray-400 md:mx-0">
            Welcome to Swastik Computer
          </span>

          <h2
            className="text-3xl font-extrabold leading-[1.08] tracking-tighter sm:text-4xl md:text-6xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Your Partner in IT and CCTV Solutions
          </h2>

          <p className="mx-auto max-w-md  font-medium text-gray-400 sm:text-base md:mx-0">
            SALES & SERVICE
          </p>

          <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-4 md:justify-start">
           
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative mt-2 flex w-full justify-center md:mt-0 md:w-1/2">
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800 opacity-40 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] lg:h-[560px] lg:w-[560px]" />

          <div className="relative z-10 h-[340px] w-full max-w-[620px] overflow-hidden rounded-2xl shadow-2xl sm:h-[460px] sm:rounded-3xl lg:h-[540px]">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />

            {/* Slider Dots */}
            <div className="mt-5 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 bg-white"
                      : "w-2.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
