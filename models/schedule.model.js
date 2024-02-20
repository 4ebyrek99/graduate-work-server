import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const scheduleSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    schedule: [
        {
            id: {
                type: String,
                required: true
            },
            events: {
                type: Array,
                default: [],
                required: false
            },
            type: {
                type: String,
                required: true
            },
            lessons: {
                type: Array,
                default: [],
                required: true
            }
        }
    ]
})

export default mongoose.model("Schedule", scheduleSchema)
