require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();

router.get('/', (request, response) =>{
    const username = "KKseFu";
    const user = {name: "ursula"};
    const acessToken = jwt.sign(user, process.env.ACESS_TOKEN_SECRET);
    response.json({acessToken: acessToken});
});

module.exports = router;