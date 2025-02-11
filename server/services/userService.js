// services/userService.js
const User = require('../models/User');

async function getUser(email) {
    try{
        const user = await User.findOne({where: {email: email}});
        return user;
    }
    catch (error) {
        throw new Error('Erro ao buscar usuário: ' + error.message);
    }
}

async function getUsers() {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Erro ao buscar usuários: ' + error.message);
    }
}

async function createUser(name, email) {
    try {
        const newUser = await User.create({ name, email });
        return newUser;
    } catch (error) {
        throw new Error('Erro ao criar usuário: ' + error.message);
    }
}

module.exports = {
    getUser,
    getUsers,
    createUser
};
