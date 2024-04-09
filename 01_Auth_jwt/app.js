require("dotenv").config();
const users = require("./routes/users");
const connection = require("./dbConnection/db");
const express = require("express");
const app = express();
connection();

app.use(express.json());

app.use("/api/users", users);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
