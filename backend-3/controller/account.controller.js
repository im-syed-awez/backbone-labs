import { Account } from "../model/account.model.js";

export const createAccount = async (req, res) => {
    // Error handling through try & catch
    try {
        // Here we will destructure the incoming fields(data) from the client which is coming through 'req.body'. 
        const { name, email, phone, password } = req.body;
    
        const account = await Account.create({
            name,
            email,
            phone,
            password
        });
        return res.status(201).json({
            success: true,
            message: `${account.name} is successfully created`,
            account
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal Server error: ${error}`
        });
    }

};