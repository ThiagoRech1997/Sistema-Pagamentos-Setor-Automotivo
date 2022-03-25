const Products = require('./../models/Products')

module.exports = {
    async index(req, res){
        const products = await Products.findAll()

        return res.json(products)
    },
    async store(req, res){
        const { description, amount, value } = req.body

        const products = await Products.create({ description, amount, value })

        return res.json(products)
    },
}