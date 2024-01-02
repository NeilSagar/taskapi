import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbname="PACEFIN_task";

const username = process.env.DBUSERNAME;
const password = process.env.DBPASS;

const dburi = "mongodb+srv://" + username + ":" + password+"@cluster0.dmask0z.mongodb.net/" + dbname + "?retryWrites=true&w=majority";

const connectDB=async()=>{
    console.log("trying to connect to db");
    try {
        await mongoose.connect(dburi);
        console.log("Connected to db:"+dbname);
    } catch (error) {
        console.log("Could not connect to db:"+dbname+"Error:"+error.message);
    }
}

export default connectDB;