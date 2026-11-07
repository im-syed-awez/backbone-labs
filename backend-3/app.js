import express from "express";
import { dbConnection } from "./config/db.js";
import accountRouter from "./routes/account.route.js"

const app = express();
const SERVER = process.env.PORT || 3000;

// It is built-in middleware, which parses the coming data into json.
app.use(express.json());

// It is a industry standard use prefix this api url like this and call the route we made
app.use('/api/v1/accounts', accountRouter);
// Api: http://localhost:3000/api/v1/accounts/create


app.listen(SERVER, () => {
    // we will connect database here 
    dbConnection();
    console.log(`Server is Running on http://localhost:${SERVER}`);
});

export default app;