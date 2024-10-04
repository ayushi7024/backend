import mongoose from 'mongoose';

const creatorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true },
}, { timestamps: true });

const Creator = mongoose.model('Creator', creatorSchema);
export default Creator;
