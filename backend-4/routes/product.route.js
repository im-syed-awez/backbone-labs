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

/*REST Api's we have created:
1. http://localhost:8000/api/v1/products/create
2. http://localhost:8000/api/v1/products
3. http://localhost:8000/api/v1/products/product/:id
4. http://localhost:8000/api/v1/products/update/:id
5. http://localhost:8000/api/v1/products/delete/:id
*/



export default router; 