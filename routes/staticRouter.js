const express = require("express");
const router = express.Router();
const url = require("../models/url")

router.get("/", async(req,res) => {
    const allUrls = await url.find({createdBy: req.user._id});
    
    return res.render("home", {
        urls : allUrls,
    });
});

router.get("/signup", (req,res) =>{
    return res.render("signup");
});

router.get("/login", (req,res)=>{
    return res.render("login");
})
module.exports = router;