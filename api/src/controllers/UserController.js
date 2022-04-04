const User = require('./../models/User')

module.exports = {
    async authentication(req, res){
        const { email, password } = req.body
        const users = await User.findOne({ where: { email } })
        //res.header("Access-Control-Allow-Origin", "*")
        //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

        if(!users){
            return res.status(400).send({ error: 'User not found' })
        }
        if(password != users.password){
            return res.status(400).send({ error: 'Invalid password' })
        }
        users.password = undefined
        return res.json(users)
    },
    async index(req, res){
        const user = await User.findAll()

        res.header("Access-Control-Allow-Origin", "*")
        
        return res.json(user)
    },
    async store(req, res){
        const { email, password, access } = req.body

        const user = await User.create({ email, password, access})

        return res.json(user)
    },
}