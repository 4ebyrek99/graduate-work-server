import jwt from "jsonwebtoken"

export default function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token) return res.status(403).json({
            success: false,
            msg: "Не авторизован"
        })
        req.user = jwt.verify(token, "secretKey")
        next()
    } catch (err) {
        res.status(403).json({
            success: false,
            msg: "Не авторизован"
        })
    }
}