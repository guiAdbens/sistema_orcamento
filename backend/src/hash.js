import bcrypt from "bcryptjs";

const senha = "cnm2290";
const hash = await bcrypt.hash(senha, 10);

console.log(hash);
