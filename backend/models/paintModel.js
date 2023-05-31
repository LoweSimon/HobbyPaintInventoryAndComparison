import mongoose from "mongoose";

const Schema = mongoose.Schema

const paintSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('paint', paintSchema);
