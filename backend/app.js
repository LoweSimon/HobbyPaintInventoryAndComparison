import express from "express";
const app = express();
import bodyParser from "body-parser";
import bcrypt from 'bcryptjs';

import dbConnect from "./db/dbconnect.js";
import userInformation from './db/userModel.js';

dbConnect();


app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.json({ message: "Hey! This is your server response!" });
  next();
});

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


export default app;