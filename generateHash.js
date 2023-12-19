import bcrypt from "bcrypt";

const password = "mcsp2309";
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

console.log("Bcrypt Hash:", hash);
