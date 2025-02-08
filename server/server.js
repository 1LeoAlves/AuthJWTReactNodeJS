const tokenRoute = require("./routes/token.js");

const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");
const corsOption = {
    origin: [`http://localhost:8080/`], /// Para permitir apenas de endereços confiavéis.
};

app.use(cors(corsOption));
app.use(express.json());
app.use("/token_gen", tokenRoute);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});