import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const scheduleSchema = new Schema({
    lessonName: {
        type: String,
        required: true
    },
    timeStart: {
        type: String,
        required: true
    },
    timeEnd: {
        type: String,
        required: true
    },
    classroom: {
        type: String,
        required: true
    },
    lessonType: {
        type: String,
        required: true
    },
    zoomId: {
        type: String,
        required: true
    },
    zoomPass: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },

})

export default mongoose.model("Schedule", scheduleSchema)
