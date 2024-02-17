import User from "../models/user.model.js"
import {hashSync} from "bcrypt";

class userController {
    async getAll(request, response) {
        try {
            const users = await User.find();

            response.status(200).json(users);
        } catch (err) {
            response.status(500).json(err);
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