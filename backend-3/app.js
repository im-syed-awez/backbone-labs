import express from "express";

import { dbConnection } from "./config/db.js";

const SERVER = process.env.PORT || 3000;

const app = express();

app.listen(SERVER, () => {
    dbConnection();
    console.log(`Server is Running on http://localhost:${SERVER}`);
});

export default app;