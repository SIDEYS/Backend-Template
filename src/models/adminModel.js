import mongoose from "mongoose";

// Admin Schema Starts From Here
const AdminSchema = new mongoose.Schema({
    userRole: {     // 1- superadmin, 2- admin, 3- tellecaller, 4- account
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber1: {
        type: Number
    },
    mobileNumber2: {
        type: Number
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    lastLogin: {
        type: Number
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const Admin = mongoose.model('admins', AdminSchema)

export default Admin


