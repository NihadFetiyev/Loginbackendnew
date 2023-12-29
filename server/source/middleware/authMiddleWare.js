import jwt from "jsonwebtoken"

const  jwtPassword = "li15@%^5"

export default (req, res, next) => {
    try {
        if (!req.headers.authorization.startsWith("Bearer")) {
            res.status(403).send("token not valid")
            return
        }
        const token = req.headers.authorization.slice(7)
        const decode = jwt.verify(token, jwtPassword)
        req.decode = decode
        next()
    } catch (error) {
        res.status(401).send({ message: error })
    }
}