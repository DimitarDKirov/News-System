/* globals require module */

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const data = require("../../data");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: "Awesome",
    resave: true,
    saveUninitialized: true
}));

app.set("view engine", "pug");
app.use("/static", express.static("public"));
require("../passport")(app, data);

module.exports = app;