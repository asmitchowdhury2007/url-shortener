const express = require("express");
const app = express();
const {ConnectMongoDB} = require("./connection");
const url = require("./models/url");
const path = require("path");

const urlRouter = require("./routes/router");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const {restricToLoggedInUser}=require("./middlewares/auth");
const cookieParser = require("cookie-parser");

//Connect with MOngoDB
ConnectMongoDB("mongodb://127.0.0.1:27017/urlList").then(()=> console.log("MongoDB running.."));
//cookie-parser


//middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(cookieParser());

//router

app.use("/url",restricToLoggedInUser, urlRouter);
app.use("/", staticRoute);
app.use("/user", userRoute);


//Server creation
app.listen(4001, ()=> console.log("Server running..."));