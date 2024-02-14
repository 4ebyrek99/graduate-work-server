import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const scheduleSchema = new Schema({
    dayName: {
        type: String,
        required: true
    },
    lessonType: {
        type: String,
        required: true,
        default: "offline"
    },
    lessons: [
        {
            lessonName: {
                type: String,
                default: "-"
            },
            timeStart: {
                type: String,
                default: "-"
            },
            timeEnd: {
                type: String,
                default: "-"
            },
            classroom: {
                type: String,
                default: "-"
            },
            zoomId: {
                type: String,
                default: "-"
            },
            zoomPass: {
                type: String,
                default: "-"
            },
            teacher: {
                type: String,
                default: "-"
            }
        }
    ]
})

export default mongoose.model("Schedule", scheduleSchema)
