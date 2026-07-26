import express from 'express';
import authService from '../services/authService.js';

const router = express.Router();

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const authResponse = await authService.login(username, password);
    res.json(authResponse);
  } catch (error) {
    if (error.message === 'Invalid username or password') {
      return res.status(401).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});

// @desc    Seed the admin user (run once)
// @route   POST /api/auth/seed
// @access  Public (In a real app, remove or secure this!)
router.post('/seed', async (req, res) => {
  try {
    await authService.seedAdmin();
    res.status(201).json({
      message: 'Admin created successfully. Username: admin, Password: password123'
    });
  } catch (error) {
    if (error.message === 'Admin already exists') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
});

export default router;
