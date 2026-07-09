import React from 'react';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaLaptop } from 'react-icons/fa';

const Footer = ({ shopInfo = {}, links = {} }) => {
  const defaultShopInfo = {
    name: "SWASTIK COMPUTER",
    address: "1st Floor, Sharda Complex, Beside Central Bank Of India, Opposite LIC Building, Pali Road, Gandhi Nagar, Dehri On Sone-821307, Bihar.",
    phone: "+91-7004084867",
    email: "swastikcomputer85@gmail.com",
    gstin: "10**********1ZA"
  };

  const defaultLinks = {
    quick: [
      { name: "NEW LAPTOPS", href: "#laptops" },
      { name: "REFURBISHED LAPTOP", href: "#gaming" },
      { name: "DESKTOP", href: "#repair" },
      { name: "PRINTER", href: "#contact" },
      { name: "CCTV", href: "#contact" }
    ]
  };

  const info = { ...defaultShopInfo, ...shopInfo };
  const footerLinks = { ...defaultLinks, ...links };
  const mapQuery = encodeURIComponent(info.address);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
  const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <footer id="contact" className="bg-black text-white py-14 sm:py-16 px-4 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        
        {/* Shop Info */}
        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 text-white p-1.5 rounded shadow-lg shadow-purple-500/50">
              <FaLaptop className="text-xl" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent tracking-tighter">{info.name}</span>
          </div>
          <p className="text-sm text-gray-400 font-medium leading-relaxed">{info.address}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Quick Links</h4>
          <ul className="space-y-3 text-sm font-medium text-gray-400">
            {footerLinks.quick.map((link, idx) => (
              <li key={idx}><a href={link.href} className="hover:text-white transition">{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Find Us</h4>
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-950 shadow-lg">
            <iframe
              title="Swastik Computer location map"
              src={embedUrl}
              className="h-56 w-full border-0 sm:h-64"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4">
              <p className="text-sm leading-6 text-gray-400">{}</p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-gray-200"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Contact Us</h4>
          <ul className="space-y-4 text-sm font-medium text-gray-400">
            <li className="flex items-start space-x-3">
              <FiMapPin className="text-white mt-1 text-lg" />
              <span>{info.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <FiPhone className="text-white text-lg" />
              <a href={`tel:${info.phone}`} className="hover:text-white transition">{info.phone}</a>
            </li>
            <li className="flex items-center space-x-3">
              <FiMail className="text-white text-lg" />
              <a href={`mailto:${info.email}`} className="hover:text-white transition">{info.email}</a>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium gap-2">
        <p>© {new Date().getFullYear()} {info.name}. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 md:mt-0">GSTIN: {info.gstin}</p>
      </div>
    </footer>
  );
};

export default Footer;
