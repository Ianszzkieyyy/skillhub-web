import express from 'express';
import cors from 'cors';

import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';


const app = express();

app.use(cors());

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log(`Server is running on PORT:${ENV.PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1); 
    }
}

startServer();

