const express = require("express");
const app = express();
const {ConnectMongoDB} = require("./connection");
const url = require("./models/url");
const path = require("path");

const urlRouter = require("./routes/router");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
//Connect with MOngoDB
ConnectMongoDB("mongodb://127.0.0.1:27017/urlList").then(()=> console.log("MongoDB running.."));

//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//router

app.use("/url", urlRouter);
app.use("/", staticRoute);
app.use("/user", userRoute);


//Server creation
app.listen(4001, ()=> console.log("Server running..."));