import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappMessage =
    "Hello Swastik Computer, I would like to know more about your products and services.";

  const navLinks = [
    { href: "#home", label: "HOME" },
    { href: "#Products", label: "NEW LAPTOPS" },
    { href: "#laptops", label: "REFURBISHED LAPTOPS" },
    { href: "#about", label: "PRINTER" },
    { href: "#about", label: "CCTV" },
    { href: "#about", label: "ABOUT" },
    
    
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group shrink-0">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white p-2 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-400/50 transition transform group-hover:scale-110">
              <FaLaptop className="text-xl" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tighter leading-none">
                SWASTIK
              </h1>
              <span className="text-[12px] sm:text-[10px] bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-widest font-bold">
                COMPUTER
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-black font-semibold text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="tel:+917004084867"
              className="flex items-center gap-2 bg-black text-white px-4 lg:px-5 py-2.5 rounded-full font-semibold hover:bg-gray-800 transition"
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
              className="flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-4 lg:px-5 py-2.5 rounded-full text-sm font-bold transition shadow-md"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-200 bg-white p-3 text-gray-900 shadow-sm"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[28rem] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-black"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+917004084867"
                className="flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
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
                className="flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-600"
              >
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
