require("dotenv").config();
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();
let refreshTokens = [];

router.get('/login', (request, response) =>{ // <-- Logar o Usuário
    const username = "ursula"; // <-- enviar um username no post
    const acessToken = GenerateAcessToken(username);
    const refreshToken = jwt.sign(username, process.env.REFRESH_TOKEN_SECRET);
    response.json({acessToken: acessToken, refreshToken: refreshToken});
});

router.get('/refresh', (request, response) => { // <-- Renovar Token.
    const refreshToken = request.body.token;
    if(refreshToken == null) return response.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return response.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if(error) return response.sendStatus(403);
        const acessToken = GenerateAcessToken({name: user.name});
        return response.json({acessToken: acessToken});
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

function GenerateAcessToken(username){
    return jwt.sign({name: username}, process.env.ACESS_TOKEN_SECRET, {expiresIn: 900})
}

module.exports = router;