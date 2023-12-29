import Users from '../models/userSchema.js'


export const getAllUsers = async (req, res) => {
    const user = await Users.find({})
    res.json(user)
}

export const DeleteUser = async (req, res) => {
    try {
        console.log(req.decode);
        if (req.decode.role === "Admin") {
            const { id } = req.params
            const user = await Users.findByIdAndDelete(id)
            res.status(200).json(user)
            return
        }
        res.status(403).send("huquqnuz catmir")
    } catch (error) {
        res.status(403).send({ message: error })
    }
}

export const UpdateUser = async (req, res) => {
    try {
        console.log(req.decode);
        if (req.decode.role === "Admin") {
            const { id } = req.params
            const user = await Users.findByIdAndUpdate(id)
            res.status(200).json(user)
            return
        }
        res.status(403).send("huquqnuz catmir")
    } catch (error) {
        res.status(403).send({ message: error })
    }
}