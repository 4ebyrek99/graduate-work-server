import Teacher from '../models/teachers.model.js'

class TeachersController {
    async getAll(req, res) {
        try {
            const teachers = await Teacher.find()
            res.status(200).json(teachers)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async add(req, res) {
        try {
            const newTeacher = {
                ...req.body
            }
            const created = await Teacher.create(newTeacher)
            res.status(201).json(created)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async getTeacherInfo(req, res) {
        try {
            const id = req.body.id
            const teacher = await Teacher.findById({_id: id})
            if (!teacher) {
                res.status(404).json({
                    success: false,
                    msg: "Преподаватель не найден"
                })
            }
            res.status(200).json({
                success: true,
                teacher
            })
        } catch (err) {
            res.json(err)
        }
    }
}

export default new TeachersController()