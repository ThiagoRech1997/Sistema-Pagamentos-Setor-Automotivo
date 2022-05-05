const Sales = require('./../models/Sales')

const Clients = require('./../models/Clients')

module.exports = {
    async index(req, res){
        const sales = await Sales.findAll()

        return res.json(sales)
    },
    async store(req, res){
        const { clients_id } = req.body

        const clients = await Clients.findByPk(clients_id)
        if(!clients){
            return res.status(400).json({ error: 'Client not found' })
        }

        const sales = await Sales.create({ 
            clients_id
        })

        return res.json(sales)
    },
}