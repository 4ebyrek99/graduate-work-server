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

    async addGroupLessons(req, res) {
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

    async updateGroupLessons(req, res) {

        try {
            const data = req.body

            await Lesson.findOneAndUpdate(
                {groupName: data.groupName, "schedule.id": editedDay.id },
                {
                    $set: {
                        "schedule.$.events": editedDay.events,
                        "schedule.$.type": editedDay.type,
                        "schedule.$.lessons": editedDay.lessons,
                    }
                }
            )
            res.json({
                success: true,
                msg: "День обновлен"
            })
        } catch (err) {
            res.json({
                success: false,
                msg: "Ошибка обновления"
            })
        }
    }
}

export default new LessonsController()