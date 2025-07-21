import express from 'express';
import cors from 'cors';

import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express';

import userRoutes from './routes/user.routes.js';
// import commentRoutes from './routes/comment.routes.js';
// import postRoutes from './routes/post.routes.js';
// import projectRoutes from './routes/project.routes.js';


const app = express();

app.use(cors());
app.use(express.json())
app.use(clerkMiddleware());

// ROUTES
app.use('/api/user', userRoutes);
// app.use('/api/post', postRoutes);
// app.use('/api/project', projectRoutes);
// app.use('/api/comment', commentRoutes);

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

