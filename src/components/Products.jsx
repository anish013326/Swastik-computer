import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiShoppingCart } from 'react-icons/fi';

const Products = ({ category, categoryTitle }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const defaultProducts = [
    { id: 1, name: "ASUS ROG Strix G15", specs: "Ryzen 7, 16GB RAM, RTX 3060", price: "₹85,990", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80", category: "New Laptops" },
    { id: 2, name: "MacBook Air M2", specs: "Apple M2, 8GB RAM, 256GB SSD", price: "₹1,05,000", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80", category: "New Laptops" },
    { id: 3, name: "Dell XPS 13", specs: "Intel i7 12th Gen, 16GB RAM", price: "₹1,20,500", image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80", category: "New Laptops" },
    { id: 4, name: "Lenovo IdeaPad Gaming", specs: "Intel i5, 8GB RAM, GTX 1650", price: "₹52,990", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=400&q=80", category: "New Laptops" }
  ];

  const allProducts = products.length > 0 ? products : defaultProducts;
  const productList = allProducts.filter(p => p.category === category);

  if (productList.length === 0 && !loading) {
    return null; // Don't render section if no products in category
  }

  return (
    <section id="laptops" className="py-20 lg:py-28 px-4 sm:px-6 max-w-7xl mx-auto bg-gray-50/50">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-14 border-b border-gray-200 pb-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tighter">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">{categoryTitle}</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base sm:text-lg font-medium max-w-xl">
            Discover our curated selection of high-quality products.
          </p>
        </div>
        <a href="#" className="group inline-flex items-center gap-2 text-black font-bold hover:text-purple-600 transition-colors text-sm sm:text-base self-start sm:self-auto">
          View All Collection 
          <FiArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            <p className="text-gray-500 font-medium">Loading inventory...</p>
          </div>
        ) : (
          productList.map((product) => (
            <div key={product._id || product.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full hover:-translate-y-1">
              
              <div className="bg-gray-50 rounded-2xl mb-5 overflow-hidden h-56 relative flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image' }}
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <div className="flex-grow flex flex-col">
                <h3 className="font-extrabold text-gray-900 text-lg tracking-tight mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 font-medium line-clamp-2 mb-4 flex-grow">{product.specs}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="font-black text-gray-900 text-xl">{product.price}</span>
                  <button className="bg-black hover:bg-gray-800 text-white p-3 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center">
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Products;
