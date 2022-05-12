const Sales = require('./../models/Sales')
const ProductSale = require('./../models/ProductSale')
const BillsToReceive = require('./../models/BillsToReceive')

const Clients = require('./../models/Clients')

module.exports = {
    async index(req, res){
        const sales = await Sales.findAll()

        return res.json(sales)
    },
    async store(req, res){
        const { clients_id, numberInstallments, products } = req.body
//        var totalValue = 0
//        var installment_value = 0
        const clients = await Clients.findOne({ where: {id: clients_id} })
        if(!clients){
            return res.status(400).json({ error: 'Client not found' })
        }

        const sales = await Sales.create({ 
            clients_id
        })
/**
        for(var i =0; i < products.length; i++){
            totalValue += products.value
            const productSale = await ProductSale.create({ 
                products_id: products[i].id,
                sales_id: sales.id,
                unitary_value: products[i].value,
                amount: 1
            })
        }

        installment_value = totalValue / numberInstallments

        for(var i = 0; i < numberInstallments; i++){
            const billtoreceive = await BillsToReceive.create({ 
                status: 'Unpayed',
                total_sale: totalValue,
                number_installments: i + '/' + numberInstallments,
                installment_value,
                sales_id: sales.id
            })
        }
*/
        return res.json(sales)
    },
}