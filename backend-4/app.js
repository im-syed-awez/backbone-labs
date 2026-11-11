import express from "express";
import { PORT } from "./config/env.js";
import { dbConnection } from "./config/db.js";
import productRouter from "./routes/product.route.js";

const SERVER = PORT || 8000;

//Initailize express
const app = express();

// Parse the incomig data in json.
app.use(express.json());

// Using that routes, and import the router with the name of productRouter
app.use("/api/v1/products", productRouter);

/* How do the Api Routes look, Use any api testing tool and Don't forget to remove(:id) with the id):
1. http://localhost:8000/api/v1/products/create
2. http://localhost:8000/api/v1/products
3. http://localhost:8000/api/v1/products/product/:id  
4. http://localhost:8000/api/v1/products/update/:id
5. http://localhost:8000/api/v1/products/delete/:id
*/ 

app.listten(SERVER, () => {
    dbConnection();
    console.log(`Server is running on http://localhost:${SERVER}`);
});

export default app;