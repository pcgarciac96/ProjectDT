import dotenv from "dotenv";
dotenv.config();
export default {
  TOKEN_SECRET: process.env.TOKEN_SECRET || "",
  TOKEN_RESET_PASS: process.env.TOKEN_RESET_PASS || "",
};
