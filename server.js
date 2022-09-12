const { ifError } = require("assert");
const express = require("express");
const path = require("path");
const cors = require("cors")
const mongoose = require("mongoose")
const route = require("./routes/index")

require("dotenv").config();


const app = express();

const port = process.env.PORT || 3001;
const host = "localhost";

app.use(cors());    
app.set(express.urlencoded({ extended: true }));
app.use(express.static("./static"))

app.use('/',route)





app.listen(port, host, () => {
    console.log(`server has  been started at ${port}`)
})

