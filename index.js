import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.get("/", (req,res) => {
    res.send("API is running")
})

app.listen(PORT, () =>{
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})