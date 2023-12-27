import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "Admin"], default: "user" },
},{timestamps:true})

export default mongoose.model('User', userSchema);
