import {Router} from "express"
import scheduleController from "../controllers/schedule.controller.js";

const scheduleRouter = new Router()

scheduleRouter.get("/get-all", scheduleController.getAll)
scheduleRouter.post("/add", scheduleController.add)
scheduleRouter.get("/generate-schedule", scheduleController.generateSchedule)

export default scheduleRouter;