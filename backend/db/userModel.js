import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide your name."],
        unique: false,
    },

    username: {
        type: String,
        required: [true, "Please provide a username."],
        unique: [true, "Username already exists."],
    },

    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: [true, "An account with this email already exists."],
    },

    password: {
        type: String,
        required: [true, "Please provide a password."],
        unique: false,
    },

    date: {
        type: Date,
    },
})

export default mongoose.model.userInformation || mongoose.model("userInformation", UserSchema);