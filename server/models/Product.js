import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specs: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['New Laptops', 'Refurbished Laptops', 'Printer', 'CCTV'],
    default: 'New Laptops'
  },
}, {
  timestamps: true,
});

export default mongoose.model('Product', productSchema);
