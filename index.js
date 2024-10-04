// index.js

import express from 'express';
import cors from 'cors';
import connectDB from './Config/db.js'; // Import the database connection function
import courseRoutes from './Routes/courseroutes.js';
import testimonialsRouter from './Routes/testmonial.js';
import creatorsRouter from './Routes/creator.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB(); // Call the connectDB function to establish the connection

// Use routes
app.use('/api', courseRoutes);
app.use('/api/creators', creatorsRouter);
app.use('/api/testimonials', testimonialsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
