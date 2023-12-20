import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const AdminPassword = process.env.ADMIN_PASSWORD;
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(AdminPassword, salt);

console.log("Bcrypt Hash:", hash);