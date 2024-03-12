import {Router} from "express"
import studentsController from "../controllers/students.controller.js"

const studentsRouter = new Router()

studentsRouter.post("/get-by-group-name", studentsController.getByGroupName)
studentsRouter.post("/create-group", studentsController.createGroup)
studentsRouter.post("/add-to-group", studentsController.addToGroup)

export default studentsRouter;