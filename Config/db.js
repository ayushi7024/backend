import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to mongoDB :)`);
    } catch (error) {
        console.log(`ERORR: ${error}`);
        process.exit(1);
        
    }
}

export default connectDB;