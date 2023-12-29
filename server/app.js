import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { AuthRoute } from './source/routes/authRoute.js'
import { UserRoute } from './source/routes/userRoute.js'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
// app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use("/",AuthRoute)
app.use("/",UserRoute)

mongoose.connect('mongodb+srv://nihadfatiyev:nihad123@cluster0.tygkpo2.mongodb.net/')
    .then(() => console.log("connected"))
    .catch(error => console.log(error))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})