import React, { useState, useEffect } from 'react';
import { FiTrash2, FiLogOut, FiEdit2, FiUploadCloud } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    specs: '',
    price: '',
    image: '',
    category: 'New Laptops', // Default category
  });
  const [filterCategory, setFilterCategory] = useState('All');
  const [imageFile, setImageFile] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', specs: '', price: '', image: '', category: 'New Laptops' });
    setImageFile(null);
    setEditingId(null);
    // Reset file input visually
    const fileInput = document.getElementById('imageFile');
    if (fileInput) fileInput.value = '';
  };

  const handleEditClick = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      specs: product.specs,
      price: product.price,
      image: product.image,
      category: product.category || 'New Laptops',
    });
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const formPayload = new FormData();
      
      formPayload.append('name', formData.name);
      formPayload.append('specs', formData.specs);
      formPayload.append('price', formData.price);
      formPayload.append('category', formData.category);
      
      if (imageFile) {
        formPayload.append('imageFile', imageFile);
      } else if (formData.image) {
        formPayload.append('image', formData.image);
      }

      const url = editingId 
        ? `http://localhost:5000/api/products/${editingId}`
        : 'http://localhost:5000/api/products';
        
      const method = editingId ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formPayload, // browser automatically sets Content-Type for FormData
      });

      if (response.ok) {
        resetForm();
        fetchProducts(); // Refresh list
      } else {
        console.error('Failed to save product');
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`http://localhost:5000/api/products/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          fetchProducts();
        } else {
          console.error('Failed to delete product');
        }
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Admin Dashboard</h1>
            <p className="mt-1 text-sm font-medium text-gray-400">Manage your premium inventory.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="mt-4 sm:mt-0 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl transition-all font-semibold shadow-md ring-1 ring-white/10 hover:shadow-lg"
          >
            <FiLogOut /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/10 sticky top-24">
              <h2 className="text-xl font-extrabold text-white mb-6">
                {editingId ? 'Edit Product' : 'Add New Product'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-1">Product Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-3 transition-colors"
                    placeholder="e.g. MacBook Pro M3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-1">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-3 transition-colors"
                    placeholder="e.g. ₹1,40,000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-1">Specifications</label>
                  <textarea
                    name="specs"
                    value={formData.specs}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="block w-full rounded-xl border border-white/10 bg-slate-950/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-3 transition-colors resize-none"
                    placeholder="e.g. Apple M3, 16GB RAM, 512GB SSD"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-xl border border-white/10 bg-slate-950/50 text-white focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-3 transition-colors [&>option]:bg-slate-900"
                  >
                    <option value="New Laptops">New Laptops</option>
                    <option value="Refurbished Laptops">Refurbished Laptops</option>
                    <option value="Printer">Printer</option>
                    <option value="CCTV">CCTV</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-1">Product Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/20 border-dashed rounded-xl hover:border-purple-500 transition-colors bg-slate-950/50 cursor-pointer relative">
                    <div className="space-y-1 text-center">
                      <FiUploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-400 justify-center">
                        <label htmlFor="imageFile" className="relative cursor-pointer bg-transparent rounded-md font-bold text-purple-400 hover:text-purple-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500 px-2 py-1">
                          <span>Upload a file</span>
                          <input id="imageFile" name="imageFile" type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  </div>
                  {imageFile && <p className="text-sm mt-2 text-emerald-400 font-medium">Selected: {imageFile.name}</p>}
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    {editingId ? 'Update Product' : 'Add Product'}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-colors ring-1 ring-white/10"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-white/10 overflow-hidden">
              <div className="px-6 py-5 border-b border-white/10 bg-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h2 className="text-xl font-extrabold text-white">Current Inventory</h2>
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="rounded-lg border border-white/10 text-sm font-medium focus:ring-purple-500 focus:border-purple-500 py-1.5 pl-3 pr-8 bg-slate-950/50 text-white shadow-sm [&>option]:bg-slate-900"
                >
                  <option value="All">All Categories</option>
                  <option value="New Laptops">New Laptops</option>
                  <option value="Refurbished Laptops">Refurbished Laptops</option>
                  <option value="Printer">Printer</option>
                  <option value="CCTV">CCTV</option>
                </select>
              </div>
              <ul className="divide-y divide-white/10">
                {products.length === 0 ? (
                  <li className="p-8 text-center text-gray-400 font-medium">No products found. Add some above.</li>
                ) : (
                  products.filter(p => filterCategory === 'All' || p.category === filterCategory).map((product) => (
                    <li key={product._id} className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-white/5 transition-colors gap-4">
                      <div className="flex items-center space-x-4 sm:space-x-5 min-w-0 flex-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-slate-950 border border-white/10 rounded-2xl flex items-center justify-center p-2 shadow-sm">
                           <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-extrabold text-white truncate">{product.name}</h3>
                            <span className="px-2 py-0.5 bg-white/10 text-gray-300 text-[10px] uppercase tracking-wider font-bold rounded-md shrink-0 border border-white/10">
                              {product.category || 'Uncategorized'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1 line-clamp-1">{product.specs}</p>
                          <span className="inline-block mt-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full truncate max-w-full">
                            {product.price}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                        <button
                          onClick={() => handleEditClick(product)}
                          className="p-2.5 text-blue-400 hover:bg-blue-500/20 rounded-xl transition-colors font-medium border border-transparent hover:border-blue-500/30"
                          title="Edit product"
                        >
                          <FiEdit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="p-2.5 text-pink-400 hover:bg-pink-500/20 rounded-xl transition-colors font-medium border border-transparent hover:border-pink-500/30"
                          title="Delete product"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
