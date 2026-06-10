const express = require("express");
const router = express.Router();
const {createShortID,redirectURL,countURL}= require("../controllers/url")
router.get("/:id", redirectURL);
router.post("/", createShortID );
router.get("/entry/:id",countURL)
module.exports = router;