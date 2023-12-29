import express from 'express'
import { login, register } from '../controllers/authController.js'

export const AuthRoute = express.Router()


AuthRoute.post('/register',register)
AuthRoute.post('/login',login)