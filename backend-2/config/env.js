import { config } from "dotenv"; 

// Configuring env's here
config({ path: '.env' });

// Destructuring and accessing the env variable from process.env
export const { PORT } = process.env;