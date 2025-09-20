import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

const __dirname = path.resolve();

app.use(express.json()); // accepts JSON data in req.body
console.log("NODE_ENV:", process.env.NODE_ENV);

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend","dist")));
    app.use((req, res) =>{
        res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
    });
}
app.listen(PORT, () => {
    connectDB();
    console.log("Server starting at http://localhost:8080 Welcome");
});

