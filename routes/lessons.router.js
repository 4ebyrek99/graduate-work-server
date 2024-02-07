import {Router} from "express"
import lessonsController from "../controllers/lessons.controller.js";

const lessonsRouter = new Router()

lessonsRouter.get("/get-all", lessonsController.getAll)
lessonsRouter.post("/add", lessonsController.add)

export default lessonsRouter;