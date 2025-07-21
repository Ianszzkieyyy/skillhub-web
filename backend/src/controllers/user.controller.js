import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js'

export const getUserProfile = asyncHandler(async (req, res) => {
    const { username } = req.params;
    if (!user) res.status(404).json({ error: "User not found"});
    const user = await User.findOne({ username });

    res.status(200).json({user})
})


