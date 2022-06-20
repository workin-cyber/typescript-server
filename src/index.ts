import "dotenv/config"

import express, { Application } from "express"
import connectDb from "./db"
import postRoute from "./router/postRoute"

const port: number = Number(process.env.PORT) || 3001
const app: Application = express()

connectDb()

app.use(express.json())

app.use("/post", postRoute)

app.listen(port, () => console.log(`server runing on port ${port}`))