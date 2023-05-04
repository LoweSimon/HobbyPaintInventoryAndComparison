import express from "express";
const app = express();
import bodyParser from "body-parser";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

import dbConnect from "./db/dbconnect.js";
import userInformation from './db/userModel.js';

dbConnect();


app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ message: "Hey! This is your server response!" });
  next();
});

// Register endpoint
app.post('/register', (req, res) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            const user = new userInformation({
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                password: hashedPassword,
            });
            user.save()
                .then((result) => {
                    res.status(201).send({
                        message: "User created successfully",
                        result,
                    });
                })
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        .catch((e) => {
            res.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
});

// Login endpoint
app.post('/login', (req, res) => {
    userInformation.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt
                .compare(req.body.password, user.password)
                .then((passwordCheck) => {
                    if(!passwordCheck) {
                        return res.status(400).send({
                            message: "Passwords do not match.",
                            error,
                        });
                    }

                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    res.status(200).send({
                        message: "Login Successful.",
                        email: user.email,
                        token,
                    });

                })
                .catch((error) => {
                    res.status(400).send({
                        message: "Passwords do not match.",
                        error,
                    });
                });
            })
            .catch((e) => {
                res.status(404).send({
                    message: "Email not found",
                    e,
                });
            });
    });

export default app;