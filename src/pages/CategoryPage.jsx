import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Footer from '../components/Footer';

const categoryMap = {
  'new-laptops': { category: 'New Laptops', title: 'NEW LAPTOPS' },
  'refurbished-laptops': { category: 'Refurbished Laptops', title: 'REFURBISHED LAPTOPS' },
  'printer': { category: 'Printer', title: 'PRINTERS' },
  'cctv': { category: 'CCTV', title: 'CCTV CAMERAS' }
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  const categoryInfo = categoryMap[categoryId];

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!categoryInfo) {
    return <Navigate to="/" />; // Redirect home if invalid category
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 min-h-screen">
        <Products 
          category={categoryInfo.category} 
          categoryTitle={categoryInfo.title} 
        />
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
