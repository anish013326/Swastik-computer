import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const Products = ({ products = [] }) => {
  const defaultProducts = [
    { id: 1, name: "ASUS ROG Strix G15", specs: "Ryzen 7, 16GB RAM, RTX 3060", price: "₹85,990", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "MacBook Air M2", specs: "Apple M2, 8GB RAM, 256GB SSD", price: "₹1,05,000", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Dell XPS 13", specs: "Intel i7 12th Gen, 16GB RAM", price: "₹1,20,500", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Lenovo IdeaPad Gaming", specs: "Intel i5, 8GB RAM, GTX 1650", price: "₹52,990", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80" }
  ];

  const productList = products.length > 0 ? products : defaultProducts;

  return (
    <section id="laptops" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tighter">Featured Equipment</h2>
          <p className="text-gray-500 mt-2 text-sm font-medium">Best sellers from top brands with official warranty.</p>
        </div>
        <a href="#" className="text-black font-bold hover:text-gray-500 text-sm flex items-center">
          View All <FiArrowRight className="ml-1" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productList.map((product) => (
          <div key={product.id} className="bg-white group cursor-pointer">
            <div className="bg-gray-100 rounded-2xl mb-6 overflow-hidden h-56 relative flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Quick Add
                </button>
              </div>
            </div>
            <h3 className="font-bold text-black text-lg tracking-tight truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1 font-medium">{product.specs}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-extrabold text-black text-lg">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
