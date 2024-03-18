import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const lessonSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    activeLessons: {
        type: Array,
        required: true
    },
    notActiveLessons: {
        type: Array,
        required: false
    }
})

export default mongoose.model("Lesson", lessonSchema)
