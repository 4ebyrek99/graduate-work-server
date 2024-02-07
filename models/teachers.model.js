import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: false
    }
})

export default mongoose.model("Teacher", teacherSchema)
