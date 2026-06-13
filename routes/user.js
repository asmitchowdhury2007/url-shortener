const express = require("express");
const router = express.Router();
const {createUser,checkLoginUser} = require("../controllers/user");

router.post("/", createUser);
router.post("/login",checkLoginUser);

module.exports = router;