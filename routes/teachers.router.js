import {Router} from "express"
import teachersController from "../controllers/teachers.controller.js";

const scheduleRouter = new Router()

scheduleRouter.get("/get-all", teachersController.getAll)
scheduleRouter.post("/add", teachersController.add)

export default scheduleRouter;