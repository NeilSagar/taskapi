import {Router} from "express";

import { updateTask,allTaskDetails, createTask, deleteTask, pageNotExist, taskDetail, } from "../controller/controller.js";

const router=Router();


router.get("/allTasks",allTaskDetails);
router.get("/task/:id",taskDetail);
router.post("/createTask",createTask);
router.delete("/deleteTask/:id",deleteTask);
router.put("/updateTask/:id",updateTask);

router.all('*',pageNotExist);


export default router;