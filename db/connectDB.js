import mongoose from "mongoose";

const dbname="PACEFIN_task";
const dburi="mongodb://localhost:27017/"+dbname;

const connectDB=async()=>{
    try {
        await mongoose.connect(dburi);
        console.log("Connected to db:"+dbname);
    } catch (error) {
        console.log("Could not connect to db:"+dbname+"Error:"+error.message);
    }
}

export default connectDB;