import {Router} from "express"
import scheduleController from "../controllers/schedule.controller.js";
import verifyToken from "../utils/verifyToken.js";

const scheduleRouter = new Router()

scheduleRouter.get("/get-all", scheduleController.getAll)
scheduleRouter.post("/add", verifyToken, scheduleController.add)
scheduleRouter.post("/genSchedule", scheduleController.genSchedule)
scheduleRouter.put("/edit", verifyToken, scheduleController.edit)

export default scheduleRouter;