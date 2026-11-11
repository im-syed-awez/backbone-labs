import { Product } from "../model/product.model.js";

export const handleCreateProduct = async (req, res) => {
    try {
        // Destructure the incoming data from the client through req.body
        const { name, price, details, category } = req.body;

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
        // Get the productId from req.params.id
        // 1st Method to get ID
        const productId = req.params.id;

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
        // 2nd Method to get ID
        const { id } = req.params;
        const { name, price, details, category } = req.body;

        // Mongoose provide us this methods
        const product = await Product.findByIdAndUpdate(id);

        // Update the previous data(in Product model) with the client's data
        product.name = name;
        product.price = price;
        product.details = details;
        product.category = category;

        // Save those changes
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