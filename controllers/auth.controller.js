import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'
import { compareSync } from 'bcrypt'

const genToken = (username, role) => {
    const payload = { username, role};
    return jwt.sign(payload, 'secretKey', { expiresIn: "12h" } )
}

class AuthController {
    async login (req, res) {
        try {
            const { username, password } = req.body
            const foundUser= await User.findOne({username})
            if (!foundUser) return res.status(200).json({
                success: false,
                msg: `${username} не найден`
            })
            const passwordVerify = compareSync(password, foundUser.password)
            if (!passwordVerify) return res.status(200).json({
                success: false,
                msg: "Введен неверный пароль"
            })
            const token = genToken(foundUser.username, foundUser.role)

            res.status(200).json({
                success: true,
                token,
                userId: foundUser._id
            })
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

export default new AuthController()