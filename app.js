import express from "express"
import mongoose from "mongoose"
import cors from "cors";

import lessonsRouter from "./routes/lessons.router.js";
import scheduleRouter from "./routes/schedule.router.js";
import teachersRouter from "./routes/teachers.router.js";
import studentsRouter from "./routes/students.router.js";
import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";

import 'dotenv/config'

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000",
}))

app.use("/api/lessons", lessonsRouter)
app.use("/api/schedule", scheduleRouter)
app.use("/api/teachers", teachersRouter)
app.use("/api/students", studentsRouter)
app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)

const mongoUrl = `mongodb+srv://4ebyrek99:${process.env.MONGO}@test-db.vlwfsne.mongodb.net/db-test?retryWrites=true&w=majority&appName=test-db/test-db`

// mongoose.connect("mongodb://127.0.0.1:27017/db-test")
mongoose.connect(mongoUrl)

mongoose.connection.on('connected', () =>{
    console.log("mongo active!")
})
mongoose.connection.on('error', (err) =>{
    console.log("mongo err: ", err)
})

app.listen(3001, ()=>{
    console.log("server active!")
})