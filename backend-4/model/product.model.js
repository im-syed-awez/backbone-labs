import mongoose from "mongoose";

const productScehma =  new mongoose.Schema({
    name: String,
    price: String,
    details: String,
    category: String
});

export const Product = mongoose.model("product", productScehma);