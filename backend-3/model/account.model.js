import mongoose from "mongoose";

// how should a account look like.
const accountSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
});

//giving a name to the Model
export const Account = mongoose.model("Account", accountSchema);