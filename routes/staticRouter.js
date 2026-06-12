const express = require("express");
const router = express.Router();
const url = require("../models/url")

router.get("/", async(req,res) => {
    const allUrls = await url.find({})
    return res.render("home", {
        urls : allUrls,
    });
})


module.exports = router;