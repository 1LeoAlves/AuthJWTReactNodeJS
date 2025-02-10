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

function AuthToken(request, response, next){
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token === null) return response.sendStatus(401);
    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (error, user) => {
        if(error) return response.sendStatus(403);
        req.user = user;
        next();
    });
}

module.exports = router;