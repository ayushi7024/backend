// models/courseModel.js

import mongoose from 'mongoose';

// Define the schema for courses
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String, // e.g., '4 weeks'
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

// Create and export the Course model
const Course = mongoose.model('Course', courseSchema);
export default Course;
