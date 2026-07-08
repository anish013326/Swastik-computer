import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const whatsappMessage =
    "Hello Swastik Computer, I would like to know more about your products and services.";

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-400/50 transition transform group-hover:scale-110">
            <FaLaptop className="text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tighter leading-none">
              SWASTIK
            </h1>
            <span className="text-[10px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-widest font-bold">
              COMPUTER
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-black font-semibold text-sm transition"
          >
            Home
          </a>
          <a
            href="#laptops"
            className="text-gray-600 hover:text-black font-semibold text-sm transition"
          >
            Laptops
          </a>
          <a
            href="#gaming"
            className="text-gray-600 hover:text-black font-semibold text-sm transition"
          >
            Cctv
          </a>
           <a
            href="#printer"
            className="text-gray-600 hover:text-black font-semibold text-sm transition"
          >
            Printer
          </a>
          <a
            href="#repair"
            className="text-gray-600 hover:text-black font-semibold text-sm transition"
          >
            Repair Services
          </a>
          
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-6">
          <a
            href="tel:+917004084867"
            className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            <FiPhone className="text-lg" />
            Call Now
          </a>

          <a
            href={`https://wa.me/917004084867?text=${encodeURIComponent(
              whatsappMessage,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition shadow-md"
          >
            <FaWhatsapp className="mr-2 text-lg" />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
