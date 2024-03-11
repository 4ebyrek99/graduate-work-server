import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const lessonSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    lessons: {
        type: Array,
        required: true
    },
})

export default mongoose.model("Lesson", lessonSchema)
