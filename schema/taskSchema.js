import mongoose from "mongoose";

const taskSchema=mongoose.Schema({
    taskId:{
        type:String,
        unique:true,
        required:true,
    },
    taskTitle:{
        type:String,
        required:true
    },
    taskDesc:{
        type:String,
    },
    taskStatus:{
        type:Boolean,
        default:false
    }
});

const taskModel=mongoose.model("task",taskSchema);

export default taskModel;