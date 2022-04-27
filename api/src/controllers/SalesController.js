const Sales = require('./../models/Sales')

const Clients = require('./../models/Clients')
const Products = require('./../models/Products')

module.exports = {
    async index(req, res){
        const sales = await Sales.findAll()

        return res.json(sales)
    },
    async store(req, res){
        const { finalPrice, clients_id } = req.body

        const clients = await Clients.findByPk(clients_id)
        if(!clients){
            return res.status(400).json({ error: 'Client not found' })
        }

        const sales = await Sales.create({ 
            finalPrice,
            clients_id
        })

        return res.json(sales)
    },
}