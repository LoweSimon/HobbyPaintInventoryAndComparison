import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
            }
        )
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect!");
            console.error(error);
        });

}

export default dbConnect;