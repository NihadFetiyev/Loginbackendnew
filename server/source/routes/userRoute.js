import express from "express"
import { DeleteUser, getAllUsers } from "../controllers/userController.js"
import authMiddleWare from "../middleware/authMiddleWare.js"

export const UserRoute = express.Router()

UserRoute.get('/users', getAllUsers)
UserRoute.delete('/users/:id',authMiddleWare,DeleteUser)