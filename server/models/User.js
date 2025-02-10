const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(64),  // Define o tamanho máximo como 64
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true  // Valida se o valor é um e-mail válido
        }
    },
    password: {
        type: DataTypes.STRING(16),  // Define o tamanho máximo como 16
        allowNull: false
    }
}, {
    tableName: "users",  // Garante que a tabela será criada como `users`
    timestamps: false,  // Remove os campos `createdAt` e `updatedAt`
});

module.exports = User;
