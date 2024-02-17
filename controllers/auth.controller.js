import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import { compareSync, hashSync } from 'bcrypt'

const genToken = (username, role) => {
    const payload = { username, role};
    return jwt.sign(payload, 'secretKey', { expiresIn: "12h" } )
}

class AuthController {
    async login (req, res) {
        try {
            const { username, password } = req.body
            const foundUser= await User.findOne({username})
            if (!foundUser) return res.status(404).json({msg: `${username} не найден`})
            const passwordVerify = compareSync(password, foundUser.password)
            if (!passwordVerify) return res.status(400).json({msg: "Введен неверный пароль"})
            const token = genToken(foundUser.username, foundUser.role)
            res.status(200).json({
                token,
                username: foundUser.username
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default new AuthController()