// import express from "express";
// import path from "path";

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');     //core nodejs module
const dotenv = require('dotenv')
const Promise = require('bluebird')
const users = require('../routes/users');
const auth = require('../routes/auth');    //we submit to database
// const auth = require('../routes/auth');


//to set up dotenv
 dotenv.config();

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;

//DB Config
const db = require('../keys/config.js').mongoURI;

//Connect to mongo
mongoose
.connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

//Use route
 app.use('/api/auth', auth);
 app.use('/api/users', users);
//  app.use('/api/auth/confirmation', auth);

app.post("/api/auth", (req, res) => {
    res.status(400).json({ errors: { global: "Invalid credentials"} }); //when users enter invalid account details
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, console.log("Running on localhost:5000"));


// important for babelrc
// "@babel/preset-env",
// "@babel/preset-react"