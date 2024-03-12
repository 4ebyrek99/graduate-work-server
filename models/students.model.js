import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const lessonSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    students: [
        {
            fullName: {
                type: String,
                default: "",
                required: true
            },
            phoneNumber: {
                type: String,
                default: "",
                required: true
            },
            email: {
                type: String,
                default: "",
                required: true
            }
        }
    ],
})

export default mongoose.model("Students", lessonSchema)
