import Lesson from '../models/lesson.model.js'

class LessonsController {
    async getAll(req, res) {
        try {
            const lessons = await Lesson.find()
            res.status(200).json(lessons)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async add(req, res) {
        try {
            const newLesson = {
                ...req.body
            }
            const created = await Lesson.create(newLesson)
            res.status(201).json(created)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new LessonsController()