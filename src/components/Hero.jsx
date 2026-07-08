// Imports
import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import shopImage from '../assets/public/shop.png';
import heroImage from '../assets/public/image2.jpeg';
import image1 from '../assets/public/image3.jpeg';
import shop2 from '../assets/public/shop2.jpeg';





const images = [
  { src: shop2, alt: 'Modern Computer Setup' },
  { src: shopImage, alt: 'Shop Front' },
  { src: heroImage, alt: 'Workstation Laptop' },
  { src: image1, alt: 'Modern Computer Setup' }

];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="bg-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 space-y-6">
          <span className="text-gray-400 font-bold tracking-widest uppercase text-xs border border-gray-700 px-3 py-1 rounded-full">
            Welcome to Swastik Computer
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tighter">
            Upgrade Your Setup <br/> With Swastik Computer.
          </h2>
          <p className="text-gray-400 max-w-md text-sm md:text-base font-medium">
            Computer dealers, laptop sales, CCTV installation, and repair services in Gandhi Nagar, Dehri On Sone.
          </p>
          <div className="flex space-x-4 pt-4">
            <button className="bg-white text-black hover:bg-gray-200 px-7 py-3.5 rounded-full font-bold transition flex items-center">
              Shop Laptops <FiArrowRight className="ml-2" />
            </button>
            <button className="bg-transparent border border-gray-700 text-white hover:bg-gray-900 px-7 py-3.5 rounded-full font-bold transition">
              Book Repair
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="w-[500px] h-[500px] bg-gray-800 rounded-full blur-[100px] opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 w-full max-w-[550px]">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700 object-cover aspect-square"
            />
            <div className="flex justify-center gap-2 mt-5">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentImage ? 'w-8 bg-white' : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Show slide ${index + 1}`}
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