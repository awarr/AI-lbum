var express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var imagesRouter = require("./routes/images.routes");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

// connect to the database
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Database connection failed!");
    });

app.use("/api/images", imagesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    res.status(err.status || 404).json({
        message: "No such route exists",
    });
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
        message: "Error Message",
    });
});

module.exports = app;
