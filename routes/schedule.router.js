import {Router} from "express"
import scheduleController from "../controllers/schedule.controller.js";
import verifyToken from "../utils/verifyToken.js";

const scheduleRouter = new Router()

scheduleRouter.post("/get-schedule", scheduleController.getSchedule)
scheduleRouter.post("/add", verifyToken, scheduleController.add)
scheduleRouter.post("/gen-schedule", scheduleController.genSchedule)
scheduleRouter.put("/edit-day", verifyToken, scheduleController.editDay)

export default scheduleRouter;