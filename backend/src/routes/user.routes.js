import express from 'express';
import { getUserProfile } from '../controllers/user.controller';

const router = express.Router();

// public route
router.get('/profile/:username', getUserProfile)

export default router;