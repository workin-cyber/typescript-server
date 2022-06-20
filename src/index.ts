import express, { Application } from "express"
import "dotenv/config"
import postRoute from "./router/postRoute"

const port: number = Number(process.env.PORT) || 3001
const app: Application = express()

app.use(express.json())

app.use("/post", postRoute)

app.listen(port, () => console.log(`server runing on port ${port}`))