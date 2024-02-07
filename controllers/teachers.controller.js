import Teacher from '../models/teachers.model.js'

class TeachersController {
    async getAll(req, res) {
        try {
            const teacher = await Teacher.find()
            res.status(200).json(teacher)
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
}

export default new TeachersController()