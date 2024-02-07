import Schedule from '../models/schedule.model.js'

class ScheduleController {
    async getAll(req, res) {
        try {
            const schedule = await Schedule.find()
            res.status(200).json(schedule)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async add(req, res) {
        try {
            const newSchedule = {
                ...req.body
            }
            const created = await Schedule.create(newSchedule)
            res.status(201).json(created)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new ScheduleController()