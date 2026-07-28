import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import { FaLaptop, FaUserShield } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappMessage =
    "Hello Swastik Computer, I would like to know more about your products and services.";

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/category/new-laptops", label: "NEW LAPTOPS" },
    { href: "/category/refurbished-laptops", label: "REFURBISHED LAPTOPS" },
    { href: "/category/printer", label: "PRINTER" },
    { href: "/category/cctv", label: "CCTV" },
    { href: "/#about", label: "ABOUT" },
  ];

  return (
    <nav className="bg-slate-950/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/10">
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
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-300 hover:text-white font-semibold text-sm transition tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="tel:+917004084867"
              className="flex items-center gap-2 bg-white/10 text-white px-4 lg:px-5 py-2.5 rounded-full font-semibold hover:bg-white/20 transition ring-1 ring-white/20"
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
              className="flex items-center bg-emerald-500 hover:bg-emerald-400 text-white px-4 lg:px-5 py-2.5 rounded-full text-sm font-bold transition shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              <FaWhatsapp className="mr-2 text-lg" />
              WhatsApp
            </a>

            <Link
              to="/admin"
              className="flex items-center text-gray-400 hover:text-white font-semibold text-sm transition"
            >
              <FaUserShield className="mr-1 text-lg" />
              Admin
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white shadow-sm hover:bg-white/10 transition"
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
            menuOpen ? "max-h-[36rem] overflow-y-auto opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl p-4 shadow-2xl ring-1 ring-white/5">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="tel:+917004084867"
                className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20 ring-1 ring-white/20"
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
                className="flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 font-bold text-white transition hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp
              </a>
              
              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-bold text-gray-300 transition hover:bg-white/10 hover:text-white sm:col-span-2"
              >
                <FaUserShield className="text-lg" />
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
