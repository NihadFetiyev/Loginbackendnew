import jwt from 'jsonwebtoken';
import Users from '../models/userSchema.js'
const  jwtPassword = "li15@%^5"

export const register = async (req, res) => {
    try {
        const user = await Users.create(req.body)
        const token = jwt.sign({ username: user.username, role: "User" }, jwtPassword, { expiresIn: "60s" });
        res.send(token)
    } catch (error) {
        res.status(403).send({ message: error })
    }
}

export const login  = async (req, res) => {
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
        res.status(200).send(token)                              
    } catch (error) {
        res.status(403).send({ message: error })
    }
}