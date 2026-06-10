const express = require("express");
const app = express();
const {ConnectMongoDB} = require("./connection");
const url = require("./models/url");
const urlRouter = require("./routes/router");
//Connect with MOngoDB
ConnectMongoDB("mongodb://127.0.0.1:27017/urlList").then(()=> console.log("MongoDB running.."));

//middlewares
app.use(express.json());
//router
app.use("/url", urlRouter);
//Server creation
app.listen(4001, ()=> console.log("Server running..."));