import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // accepts JSON data in req.body

app.use("/api/products", productRoutes);

console.log(process.env.MONGO_URI);

app.listen(8080, () => {
    connectDB();
    console.log("Server starting at http://localhost:8080 Welcome");
});

