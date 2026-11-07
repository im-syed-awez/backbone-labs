import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
});

export const Account = mongoose.model("Account", accountSchema);