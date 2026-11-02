import express from "express";
import { PORT } from "./config/env.js";

const app = express();

app.get('/home', (req, res) => res.send("<h1>Welcome to home page</h1>"));

app.get('/about', (req, res) => res.semd("<h1>Welcome to About page</h1>"));

app.get('/service', (req, res) => res.send("<h1>Welcome to Service page</h1>"));

app.get('/project', (req, res) => res.send("<h1>Welcome to Project page</h1>"));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;