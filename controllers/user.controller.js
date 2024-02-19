import User from "../models/user.model.js"
import {hashSync} from "bcrypt";

class userController {

    async getUserById(req, res){

        const { id } = req.body

        try {
            const user = await User.findById(id)
            res.status(200).json(user)
        } catch (err) {
            res.status(500).json(err)
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

            if (userAllreadyCreated) return res.status(400).json({ msg: "Уже существует" })

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