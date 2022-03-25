const User = require('./../models/User')

module.exports = {
    async index(req, res){
        const user = await User.findAll()

        return res.json(user)
    },
    async store(req, res){
        const { email, password, access } = req.body

        const user = await User.create({ email, password, access})

        return res.json(user)
    },
}