import mongoose from "mongoose";

const Schema = mongoose.Schema

const paintSchema = new Schema({
    paintImage: {
        data: Buffer,
        type: String,
        required: false
    },
    paintCompany: {
        type: String,
        required: true
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
            required: false
        },
        waylandPrice: {
            type: String,
            required: false
        },
        hobbyworkshopPrice: {
            type: String,
            required: false
        },
    },
    paintLink: {
        elementLink: {
            type: String,
            required: false
        },
        waylandLink: {
            type: String,
            required: false
        },
        hobbyworkshopPrice: {
            type: String,
            required: false
        }
    }
}, { timestamps: true })

export default mongoose.model('citadel', paintSchema);
