import mongoose from "mongoose";

require('dotenv').config()


async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            }
        )

}

module.exports = dbConnect;