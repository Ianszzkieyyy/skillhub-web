import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    bannerPicture: {
        type: String,
        default: "",
    },
    bio: {
        type: String,
        default: "Hello World!",
        maxlength: 160,
    },
    location: {
        type: String,
        default: "", 
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    projects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project"
        }
    ]
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;

