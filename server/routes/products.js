import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';
import productService from '../services/productService.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new product (Protected)
router.post('/', protect, upload.single('imageFile'), async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body, req.file);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a product (Protected)
router.put('/:id', protect, upload.single('imageFile'), async (req, res) => {
  try {
    const updatedProduct = await productService.modifyProduct(req.params.id, req.body, req.file);
    res.json(updatedProduct);
  } catch (error) {
    if (error.message === 'Product not found') {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: error.message });
  }
});

// Delete a product (Protected)
router.delete('/:id', protect, async (req, res) => {
  try {
    await productService.removeProduct(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    if (error.message === 'Product not found') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});

export default router;
