import mongoose from "mongoose";

const Schema = mongoose.Schema

const paintSchema = new Schema({
    paintImage: {
        data: Buffer,
        type: String,
        required: false
    },
    paintTitle: {
        type: String,
        required: true
    },
    paintType: {
        type: String,
        required: true
    },
    paintPrice: {
        elementPrice: {
            type: String,
            required: true
        },
        waylandPrice: {
            type: String,
            required: true
        },
        goblinPrice: {
            type: String,
            required: true
        },
    },
    paintLink: {
        elementLink: {
            type: String,
            required: true
        },
        waylandLink: {
            type: String,
            required: true
        },
        goblinLink: {
            type: String,
            required: true
        }
    }
}, { timestamps: true })

export default mongoose.model('base-paint', paintSchema);
