import express from "express";
import { 
    handleCreateProduct,
    handleDeleteById,
    handleGetAllProducts, 
    handleGetProductById, 
    handleUpdateById 
} from "../controller/product.controller.js";

// Initialize express Router
const router = express.Router();

router.route("/create").post(handleCreateProduct);

router.route("/").get(handleGetAllProducts);

// :id is a dynamic variable(takes the id from the req) which we use to access id in our api
router.route("/product/:id").get(handleGetProductById);

router.route("/update/:id").put(handleUpdateById);

router.route("/delete/:id").delete(handleDeleteById);

export default router; 