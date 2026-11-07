import express from "express";
import { createAccount } from "../controller/account.controller.js";

const router = express.Router();

// POST Method to write/create data on resource
router.route("/create").post(createAccount);

export default router;
