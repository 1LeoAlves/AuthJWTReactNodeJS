const tokenRoute = require("./routes/token.js");
const sequelize = require("./config/db");


const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const corsOption = {
    origin: [ /// Para permitir apenas de endereços confiavéis.
        `http://localhost:8080`, 
        `http://localhost:3030`
    ], 
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/auth", tokenRoute);

sequelize.sync({ force: false }).then(() => {
    console.log("✅ Tabelas sincronizadas com o banco!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});