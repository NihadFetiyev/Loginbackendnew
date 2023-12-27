import jwt from "jsonwebtoken"

const  jwtPassword = "li15@%^5"

export default (req, res, next) => {
    try {

        const token = req.headers.authorization
        const decoded = jwt.verify(token, jwtPassword)
        req.role = decoded.role
        next()
    } catch (error) {
        res.status(401).send({ message: error })
    }
}