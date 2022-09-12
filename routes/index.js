const express = require("express");
const path = require("path");
const route = express.Router();
const mongoose = require('mongoose');
const mongo = require('mongo');

route.use(express.urlencoded({ extended: true }));
route.use(express.static("./static"))
const db = "mongodb+srv://dalpatrathore09:ravindra@contactform.n1s7xbv.mongodb.net/ContactForm?retryWrites=true&w=majority"

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {

    console.log("connection succesfull")

}).catch((err) => console.log(err));

const mydata = new mongoose.Schema({

    fullname: String,
    email: String,
    number: Number,
    company: String,
    message: String,


});

const data = mongoose.model("data", mydata);

route.get('/', (req, res) => {
    if (res.statusCode == 200) {
        res.sendFile(__dirname + "index.html")
    }
    else {
        res.send("404,Sorry not found");
    }
});

route.post('/', (req, res) => {

    fullname = req.body.name;
    email = req.body.email;
    number = Number(req.body.number);
    company = req.body.company;
    message = req.body.message;

    const formdata = new data({
        fullname: fullname,
    })

    data.insertMany({
        fullname: fullname,
        email: email,
        number: number,
        company: company,
        message: message,
 
    })

    res.redirect('/submit')
});

route.get('/submit', (req, res) => {

    res.sendFile(path.join(__dirname, "../static/form-filled.html"))

});

module.exports = route;



