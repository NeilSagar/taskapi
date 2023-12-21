import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();
const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

connectDB();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log("Server Started at PORT:",PORT);
})