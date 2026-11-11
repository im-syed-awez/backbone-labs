import express from "express";
import { PORT } from "./config/env.js";
import { dbConnection } from "./config/db.js";

const SERVER = PORT || 8000;

//Initailize express
const app = express();

// Parse the incomig data in json.
app.use(express.json());

app.listten(SERVER, () => {
    dbConnection();
    console.log(`Server is running on http://localhost:${SERVER}`);
});