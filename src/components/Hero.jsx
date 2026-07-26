import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import shopImage from "../assets/public/11.jpeg";
import heroImage from "../assets/public/12.jpeg";
import image1 from "../assets/public/13.jpeg";
import shop2 from "../assets/public/14.jpeg";
import shop3 from "../assets/public/15.jpeg";
import shop4 from "../assets/public/16.jpeg";

const images = [
  { src: shopImage, alt: "Shop Front" },
  { src: heroImage, alt: "Laptop workstation" },
  { src: image1, alt: "Computer equipment display" },
  { src: shop2, alt: "Modern computer setup" },
  { src: shop3, alt: "Computer and accessories display" },
  { src: shop4, alt: "Swastik Computer showroom" },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showPrevious = () => {
    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setCurrentImage((current) => (current + 1) % images.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = setInterval(
      () => setCurrentImage((current) => (current + 1) % images.length),
      3000
    );

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    >
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-purple-900/30 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-10 md:flex-row lg:gap-16">
        {/* Left Content */}
        <div className="space-y-6 text-center md:w-1/2 md:text-left">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-purple-200 sm:text-sm md:mx-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
            Welcome to Swastik Computer
          </p>

          <h1
            className="text-4xl font-extrabold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Your Partner in <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IT and CCTV</span> Solutions
            <span className="mt-4 block font-sans text-2xl font-bold text-emerald-400 sm:text-3xl md:text-4xl drop-shadow-md">
              Authorized JioMart Digital Partner
            </span>
          </h1>

          <p className="mx-auto max-w-md font-semibold uppercase tracking-[0.2em] text-gray-400 sm:text-base md:mx-0  hover:underline">
            Sales &amp; Service

          </p>
        </div>

        {/* Image Carousel */}
        <div className="relative mt-2 flex w-full justify-center md:mt-0 md:w-1/2">
          {/* Vibrant colorful glow behind carousel */}
          <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 opacity-30 blur-[80px] sm:h-[420px] sm:w-[420px] sm:blur-[100px] lg:h-[560px] lg:w-[560px]" />

          <div
            className="relative z-10 flex w-full max-w-[620px] flex-col items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative h-[260px] w-full overflow-hidden rounded-2xl shadow-2xl shadow-purple-900/50 ring-1 ring-white/10 sm:h-[360px] sm:rounded-3xl md:h-[420px] lg:h-[500px]">
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="h-full w-full object-cover object-center transition-opacity duration-500 hover:scale-105"
              />
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FiChevronLeft className="text-2xl" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <FiChevronRight className="text-2xl" />
              </button>
            </div>

            <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Image carousel">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={currentImage === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentImage === index
                      ? "w-8 bg-gradient-to-r from-blue-400 to-purple-400"
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
