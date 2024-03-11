import User from "../models/user.model.js"
import {hashSync} from "bcrypt";
import jwt from "jsonwebtoken";

class userController {

    async getUserInfo (req, res) {
        try {
            const token = req.headers.authorization
            if(!token) {
                res.status(403).json({
                    success: false,
                    msg: "Не авторизован"
                })
            }
            const { id } = jwt.verify(token, "secretKey")

            const user = await User.findById({_id: id})
            res.status(200).json({
                success: true,
                firstName: user.firstName,
                lastName: user.lastName,
                groupName: user.groupName
            })
        } catch (err) {
            res.status(200).json({
                success: false,
                msg: "Не авторизован"
            })
        }
    }

    async getAll(req, res) {
        try {
            const users = await User.find();

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err)
        }
    }

    async register(req, res) {
        try {
            const { username, password } = req.body
            const userAllreadyCreated = await User.findOne({ username })

            if (userAllreadyCreated) return res.status(400).json({
                success: false,
                msg: "Уже существует" }
            )

            const newUser = {
                ...req.body,
                password: hashSync(password, 10),
                createDate: new Date().toISOString(),
                role: "headman"
            }

            const created = await User.create(newUser)

            res.status(201).json(created)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default new userController()