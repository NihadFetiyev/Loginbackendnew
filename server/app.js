import express from 'express'
const app = express()
const port = 3000
import jwt from "jsonwebtoken"
import mongoose from 'mongoose';
const { Schema } = mongoose;

const jwtPassword = "li15@%^5"
app.use(express.json())

const userSchema = new Schema({
    username: String,
    password: String,
    role: String,
})


const Users = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
    const user = await Users.find({})
    res.send(user)
})

app.post('/register', async (req, res) => {
    try {
        const user = await Users.create(req.body)
        const token = jwt.sign({ username: user.username, role: "User" }, jwtPassword);
        res.send(token)
    } catch (error) {
        res.status(403).send({ message: error })
    }
})
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await Users.findOne({ username })
        if (!user) {
            res.status(403).send({ message: "istiadeci tapilmadi" })
            return
        }       
        if (user.password !== password) {
            res.status(403).send({ message: "parol tapilmadi" })
            return
        }
        const token = jwt.sign({ username: user.username, role: user.role }, jwtPassword);
        res.status.send(token)                              
    } catch (error) {
        res.status(403).send({ message: error })
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const token = req.headers.authorization
        const decoded = jwt.verify(token, 'jwtPassword');
        if (decoded.role === "Admin") {
            const user = await Users.findByIdAndDelete(id)
            res.status(200).send(user)
            return
        }
        res.status(403).send("huquqnuz catmir")
    } catch (error) {
        res.status(403).send({ message: error })
    }
})

mongoose.connect('mongodb+srv://nihadfatiyev:nihad123@cluster0.tygkpo2.mongodb.net/')
    .then(() => console.log("connected"))
    .catch(error => console.log(error))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})