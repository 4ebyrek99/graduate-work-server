import {Router} from "express"
import lessonsController from "../controllers/lessons.controller.js";

const lessonsRouter = new Router()

lessonsRouter.post("/get-lessons", lessonsController.getLessons)
lessonsRouter.post("/add", lessonsController.add)

export default lessonsRouter;