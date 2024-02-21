import Schedule from '../models/schedule.model.js'

Date.prototype.daysInMonth = function(month) {
    return 33 - new Date(this.getFullYear(), month, 33).getDate()
}

class ScheduleController {
    async getSchedule(req, res) {
        try {
            const schedule = await Schedule.find()
            res.status(200).json(...schedule)
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

    async editDay(req, res) {
        try {
            const editedDay = req.body.day
            console.log(editedDay.id)
            await Schedule.findOneAndUpdate({ schedule: { $elemMatch: { id: editedDay.id } } }, editedDay)
            const edited = await Schedule.find({ schedule: { $elemMatch: { id: editedDay.id } } })
            res.json({
                edited
            })
        } catch (err) {
            res.json(err)
        }
        // try {
        //     const newSchedule = {
        //         ...req.body
        //     }
        //     await Schedule.findOneAndUpdate({dayName: req.body.dayName}, newSchedule)
        //     res.status(201).json({
        //         msg: "edited"
        //     })
        // } catch (err) {
        //     res.status(500).json(err.message)
        // }
    }

    async genSchedule(req, res) {

        try {
            const groupName = req.body.groupName

            const date = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

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

            const groupSchedule = await Schedule.findOne({groupName})
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

            const calendar = []

            for (let i = 0; i < arr.length; i+=7) {
                calendar.push(arr.slice(i, i + 7))
            }

            for (let i = 0; i < calendar.length; i++) {
                for (let j = 0; j <= 6; j++) {
                    calendar[i][j].lessons.push(...groupSchedule.schedule[j].lessons)
                }
            }

            res.json(calendar)

        } catch (err) {
            res.json(err)
        }
    }
}

export default new ScheduleController()