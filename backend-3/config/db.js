import mongoose from "mongoose";

export const dbConnection = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log("DATABASE connection is established");
        
    } catch (error) {
        console.log("Failed to connect Database", error);  
    }
}