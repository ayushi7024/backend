import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

// Get all courses by category
router.get('/allcourses', async (req, res) => {
  try {
    const categories = ['Agriculture', 'Food Engineering', 'Dairy Science', 'Personal Development'];
    const courses = await Course.find({ category: { $in: categories } });

    const categorizedCourses = categories.map(category => ({
      category,
      courses: courses.filter(course => course.category === category).slice(0, 6), // Top 6 courses
    }));

    res.json(categorizedCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
