const Cities = require('./../models/Cities')

module.exports = {
    async index(req, res){
        const cities = await Cities.findAll()

        return res.json(cities)
    },
    async store(req, res){
        const { name, uf } = req.body

        const cities = await Cities.create({ name, uf })

        return res.json(cities)
    },
}