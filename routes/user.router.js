import {Router} from "express"
import userController from "../controllers/user.controller.js";
import verifyToken from "../utils/verifyToken.js";

const userRouter = new Router()

userRouter.get("/get-all", verifyToken, userController.getAll)
userRouter.post("/register", userController.register)
userRouter.post("/get-user-info", userController.getUserInfo)

export default userRouter