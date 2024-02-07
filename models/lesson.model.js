import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const lessonSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
})

export default mongoose.model("Lesson", lessonSchema)
