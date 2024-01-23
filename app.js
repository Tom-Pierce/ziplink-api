const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const router = require("./routes/router.js");
require("dotenv").config();

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", router);

module.exports = app;
