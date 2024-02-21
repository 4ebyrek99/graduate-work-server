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
