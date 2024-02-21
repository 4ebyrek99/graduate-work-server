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
                default: ""
            },
            timeEnd: {
                type: String,
                required: false,
                default: ""
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
