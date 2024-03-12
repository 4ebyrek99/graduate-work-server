import Students from '../models/students.model.js'

class StudentsController {
    async getByGroupName(req, res) {
        try {
            const students = await Students.find({groupName: req.body.groupName})
            res.status(200).json(students)
        } catch (err) {
            res.status(500).json(err.message)
        }
    }
q
    async createGroup(req, res) {
        try {
            const { groupName, students} = req.body

            const groupAllreadyCreated = await Students.findOne({ groupName: groupName })

            if (groupAllreadyCreated) return res.status(400).json({
                success: false,
                msg: "Уже существует" }
            )

            const newGroup = {
                ...req.body
            }

            const created = await Students.create(newGroup)

            res.status(201).json(created)

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

    async addToGroup(req, res) {
        try {
            const {groupName, students} = req.body

            const group = await Students.findOneAndUpdate(
                {groupName: groupName},
                {
                    $set: {
                        "students": students
                    }
                }
            )
            if (group) return res.json({
                success: true,
                msg: "Список обновлен"
            })

            res.json({
                success: false,
                msg: "Группа не найдена"
            })

        } catch (err) {
            res.status(500).json(err.message)
        }
    }

}

export default new StudentsController()