import mongoose from "mongoose";

const Schema = mongoose.Schema

const paintSchema = new Schema({
    paintImage: {
        type: String,
        required: false
    },
    paintLink: {
        type: String,
        required: true
    },
    paintTitle: {
        type: String,
        required: true
    },
    paintPrice: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.model('paint', paintSchema);
