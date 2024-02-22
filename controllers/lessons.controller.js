import Lesson from '../models/lesson.model.js'

class LessonsController {
    async getLessons(req, res) {
        try {
            const groupName = req.body.groupName
            const lessons = await Lesson.findOne({ groupName: groupName })
            res.status(200).json(lessons)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async add(req, res) {
        try {
            const newLessons = {
                ...req.body
            }
            const created = await Lesson.create(newLessons)
            res.status(201).json(created)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new LessonsController()