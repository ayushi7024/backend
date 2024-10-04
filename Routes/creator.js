import express from 'express';
import Creator from '../Models/creator.js';

const router = express.Router();

// Get all creators
router.get('/', async (req, res) => {
  try {
    const creators = await Creator.find();
    res.json(creators);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
