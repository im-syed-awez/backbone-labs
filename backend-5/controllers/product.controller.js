// In this we are going to learn how to do Custom Error Handling:
// For this we are not going to write a new functions to demonstrate this we gonna use our previous example of product.

import { Product } from "../model/product.model.js";

export const handleCreateProduct = async (req, res) => {
    try {
        const { name, price, details, category } = req.body;

        // This is a custom error for client to fill-out all fields, If he fiils
        // all required fields then he will proceed.
        if(!name || !price || !details || !category){
            return res.status(400).json({
                success: false,
                message: `All Fields are required.`
            });
        }

        const product = await Product.create({
            name,
            price,
            details,
            category
        });

        return res.status(201).json({
            success: true,
            message: `${product.name} is Registered Successfully.`,
            product
        });

        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err}`
        });

    }
}

export const  handleGetAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            products
        });

        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err}`
        });
        
    }
}

export const handleGetProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        // custom error if id is not entered
        if(!productId){
            return res.status(400).json({
                success: false,
                message: `You need to enter a ID to get the Product.`
            });
        }

        const product = await Product.findById(productId);
        return res.status(200).json({
            success: true,
            product
        });
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err}`
        });
        
    }
}

export const handleUpdateById = async (req, res) => {
    try {
        const { id } = req.params;

        // Custom error for client to inpurt id
        if(!id){
            return res.status(400).json({
                success: false,
                message: `Enter an ID to select an Product.`
            });
        }

        const { name, price, details, category } = req.body;

        // custom error to update all fields
        if(!name || !price || !details || !category){
            return res.status(400).json({
                success: false,
                message: `All Fields are required to proceed and Update`
            });
        }

        const product = await Product.findByIdAndUpdate(id);

        product.name = name;
        product.price = price;
        product.details = details;
        product.category = category;

        product.save();

        return res.status(200).json({
            success: true,
            message: `${product.name} is Updated successfully.`,
            product
        });
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err}`
        });
        
    }
}

export const handleDeleteById = async (req, res) => {
    try {
        const productId = req.params.id;

        if(!productIdd){
            return res.status(400).json({
                success: false,
                message: `ID is required to select and Delete a product`
            });

        }
        await Product.findByIdAndDelete(productId);
        
        return res.status(200).json({
            success: true,
            message: `Product Deleted Successfully.`
        });
        
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: `Internal Server Error: ${err}`
        });
        
    }
}