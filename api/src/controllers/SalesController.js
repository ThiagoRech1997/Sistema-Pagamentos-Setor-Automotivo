const Sales = require('./../models/Sales')
const ProductSale = require('../models/ProductSale')
const BillsToReceive = require('./../models/BillsToReceive')
const Clients = require('./../models/Clients')

module.exports = {
    async index(req, res){
        const sales = await Sales.findAll()

        return res.json(sales)
    },
    async store(req, res){
        const { clients_id, products } = req.body
        const clients = await Clients.findOne({ where: {id: clients_id} })
        if(!clients){
            return res.status(400).json({ error: 'Client not found' })
        }

        const sales = await Sales.create({ 
            clients_id
        })

        const productSale = await ProductSale.create({ 
            unitary_value: products.value,
            amount: 1,
            products_id: products.id,
            sales_id: sales.id
        })

        const billtoreceive = await BillsToReceive.create({ 
            status: 'Unpayed',
            total_sale: products.value,
            number_installments: 1,
            installment_value: products.value,
            seles_id: sales.id
        })
        
        return res.json(sales, productSale, billtoreceive)
    },
}