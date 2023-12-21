import taskModel from "../schema/taskSchema.js";


export const allTaskDetails=async(req,res)=>{
    try {
        const response=await taskModel.find({});
        
        return res.status(200).json({message:response});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};


export const taskDetail=async(req,res)=>{
    const taskId=req.params.id;
    try {
        const response=await taskModel.findOne({taskId:taskId});
        if(response==null){
            return res.status(404).json({message:"Data not found."});
        }
        return res.status(200).json({message:response});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const createTask=async(req,res)=>{
    const receivedData=req.body;
    if (!receivedData.taskId || !receivedData.taskTitle) {
        return res.status(400).json({ message: "TaskId and TaskTitle are required fields." });
    }

    const taskData=new taskModel(receivedData);
    const taskId=taskData.taskId;
    try {
        const doesExists=await taskModel.findOne({taskId:taskId});

        if(doesExists!=null){
            return res.status(422).json({
                dataExists:true,
                message:"Task with this taskId already Exists."
            });
        }

        const response=await taskData.save();
        return res.status(201).json({message:response});
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

export const deleteTask=async(req,res)=>{
    const taskId=req.params.id;
    try {
        const response=await taskModel.findOneAndDelete({taskId:taskId});
        if (response === null) {
            return res.status(404).json({ message: "Task not found."});
        }

        return res.status(200).json({message:response});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const updateTask=async(req,res)=>{
    const taskId=req.params.id;
    const receivedData=req.body;
    if(receivedData.taskId && taskId!==receivedData.taskId){
        return res.status(400).json({message:"Task-Id can not be changed."});
    }
    if(!receivedData.taskTitle){
        return res.status(400).json({message:"Task title can not be empty."});
    }
    const taskData=new taskModel(receivedData);
    try {
        const findDetail=await taskModel.findOne({taskId:taskId});
        if (!findDetail) {
            return res.status(404).json({ message: "Task not found." });
        }
        findDetail.set(receivedData);
        const response=await findDetail.save();
        return res.status(200).json({message:response});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
};

export const pageNotExist=async(req,res)=>{
    return res.status(404).json({message:"Page not found."});
}