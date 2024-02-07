import express from "express"
import mongoose from "mongoose"

import lessonsRouter from "./routes/lessons.router.js";

const app = express()
app.use(express.json());

app.use("/api/lessons", lessonsRouter)

mongoose.connect("mongodb://127.0.0.1:27017/db-test")

mongoose.connection.on('connected', () =>{
    console.log("mongo active!")
})
mongoose.connection.on('error', (err) =>{
    console.log("mongo err: ", err)
})

app.listen(3001, ()=>{
    console.log("server active!")
})