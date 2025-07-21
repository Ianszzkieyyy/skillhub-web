import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log('Connected to MONGO_DB successfully');
    } catch (error) {
        console.error('Error connecting to MONGODB:', error);
        process.exit(1); // Exit the process with failure
        
    }
}