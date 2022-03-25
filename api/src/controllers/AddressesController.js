const Addresses = require('../models/Addresses')

module.exports = {
    async index(req, res){
        const addresses = await Addresses.findAll()

        return res.json(addresses)
    },
    async store(req, res){
        const { street } = req.body

        const addresses = await Addresses.create({ street })

        return res.json(addresses)
    },
}