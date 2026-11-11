import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

const DB_URI = MONGODB_URI;

// establish Database connection
export const dbConnection = () => {
    try {
        mongoose.connect(DB_URI)
        .then(
            console.log("Database is connected Securely.")
        );
    
    } catch (e) {
        console.log("Failed to connect Database: ",e);
        
    }
};