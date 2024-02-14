import Schedule from '../models/schedule.model.js'

Date.prototype.daysInMonth = function(month) {
    return 33 - new Date(this.getFullYear(), month, 33).getDate()
}

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

    async generateSchedule(req, res) {
        try {
            const body = req.body
            const date = new Date(new Date().getFullYear(), body.month, 1)

            const startAndEndMonth = {
                first: date.getDay(),
                last: new Date(date.getFullYear(), date.getMonth(), date.daysInMonth(date.getMonth())).getDay(),
            }

            const info = {
                prevMonth: date.daysInMonth(date.getMonth() - 1),
                month: date.daysInMonth(date.getMonth()),
                nextMonth: date.daysInMonth(date.getMonth() + 1),
                dayCountPrevMonth: date.daysInMonth(date.getMonth()) - (date.daysInMonth(date.getMonth()) - date.getDay()) - 1,
                dayCountNextMonth: 7 - startAndEndMonth.last === 7 ? 0 : 7 - startAndEndMonth.last
            }

            const schedule = await Schedule.find()
            const arr = []
            for (let i = info.prevMonth - info.dayCountPrevMonth; i < info.prevMonth; i++) {
                arr.push({
                    month: "prev",
                    number: i + 1,
                    lessons: []
                })
            }

            for (let i = 1; i < info.month + 1; i++) {
                arr.push({
                    month: "current",
                    number: i,
                    lessons: []
                })
            }

            for (let i = 1; i < info.dayCountNextMonth + 1; i++) {
                arr.push({
                    month: "next",
                    number: i,
                    lessons: []
                })
            }

            const ready = []
            for (let i = 0; i < arr.length; i+=7) {
                ready.push(arr.slice(i, i + 7))
            }

            for (let i = 0; i < ready.length; i++) {
                for (let j = 0; j < schedule.length; j++) {
                    ready[i][j].lessons.push(schedule[j])
                }
            }

            res.status(200).json({
                ready
            })
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
}

export default new ScheduleController()