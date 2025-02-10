require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false // Define como "true" se quiser ver as queries no console
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log(`✅ Conectado ao banco ${process.env.DB_DIALECT} com sucesso!`);
    } catch (error) {
        console.error("❌ Erro ao conectar ao banco:", error);
    }
})();

module.exports = sequelize;