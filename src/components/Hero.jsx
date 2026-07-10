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
      3000
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
          {/* Responsive Text Size fixed for mobile */}
          <span className="mx-auto inline-flex rounded-full border border-gray-700 px-3 py-1 text-sm sm:text-[20px] font-bold uppercase tracking-widest text-gray-400 md:mx-0">
            Welcome to Swastik Computer
          </span>

          <h2
            className="text-3xl font-extrabold leading-[1.08] tracking-tighter sm:text-4xl md:text-6xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Your Partner in IT and CCTV Solutions
            
            <span className="block mt-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-sans text-green-500">
                Authorized JioMart Digital Partner
              </span>
            </span>
          </h2>

<p className="mx-auto max-w-md font-medium underline underline-offset-4 text-gray-400 sm:text-base md:mx-0">
  SALES & SERVICE
</p>

          <div className="flex flex-col justify-center gap-3 pt-3 sm:flex-row sm:gap-4 sm:pt-4 md:justify-start">
            {/* Action buttons agar add karne ho toh yahan aayenge */}
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative mt-2 flex w-full justify-center md:mt-0 md:w-1/2">
          {/* Glow Effect */}
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-800 opacity-40 blur-[90px] sm:h-[420px] sm:w-[420px] sm:blur-[120px] lg:h-[560px] lg:w-[560px]" />

          {/* FIX: Wrapper for Image + Dots (Without overflow-hidden so dots don't hide) */}
          <div className="relative z-10 flex w-full max-w-[620px] flex-col items-center">
            
            {/* ONLY this box has overflow-hidden */}
            <div className="h-[260px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[360px] sm:rounded-3xl md:h-[420px] lg:h-[500px]">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Slider Dots (Now safely outside the hidden overflow) */}
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