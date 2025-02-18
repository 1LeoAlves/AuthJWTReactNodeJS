require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { getUser } = require("../services/userService");

const express = require("express");
const router = express.Router();

router.post('/login', async (request, response) =>{ // <-- Logar o Usuário
    const email = request.body.email;
    const pwd = request.body.pwd;
    const user = await getUser(email);

    if(user != null){
        if(user.password !== pwd) return response.sendStatus(401);
        const acessToken = GenerateAccessToken(user.email);
        const refreshToken = GenerateRefreshToken(user.email);
        response.json({acessToken: acessToken, refreshToken: refreshToken});
    }
    else{
        response.sendStatus(401);
    }
});

router.post('/refresh', (request, response) => { // <-- Renovar Token.
    const refreshToken = request.body.reTkn;
    if(refreshToken == null) return response.sendStatus(401);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if(error) return response.sendStatus(403);
        const tkn = GenerateAccessToken(user.name);
        return response.json({accessToken: tkn});
    });
})

router.delete('/logout', (request, response) => { // <-- Deslogar Usuário
    refreshTokens = refreshTokens.filter(token => token != request.body.token);
    response.sendStatus(204);
})

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

function GenerateAccessToken(email) {
    return jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' }); 
}

function GenerateRefreshToken(email) {
    return jwt.sign({ email: email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports = router;