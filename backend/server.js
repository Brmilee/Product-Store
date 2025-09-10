import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URI);

app.listen(8080, () => {
    connectDB();
    console.log("Server starting at http://localhost:8080 Welcome");
});

