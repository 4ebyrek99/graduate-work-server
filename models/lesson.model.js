import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const lessonSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    lessons: [
        {
            lessonName: {
                type: String,
                required: true
            },
            timeStart: {
                type: String,
                required: false,
                default: "00:00"
            },
            timeEnd: {
                type: String,
                required: false,
                default: "00:00"
            },
            zoomId: {
                type: String,
                required: false
            },
            zoomPassword: {
                type: String,
                required: false
            },
            teacher: {
                type: String,
                required: false
            }
        }
    ],
})

export default mongoose.model("Lesson", lessonSchema)
