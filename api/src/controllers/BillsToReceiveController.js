const BillsToReceive = require('./../models/BillsToReceive')

module.exports = {
    async index(req, res){
        const billsToReceive = await ProductSale.findAll()

        return res.json(billsToReceive)
    },
    async store(req, res){
        const { numberInstallments, totalValue, sales, installment_value } = req.body

        const billtoreceive = await BillsToReceive.create({ 
            status: 'Unpayed',
            total_sale: totalValue,
            number_installments: numberInstallments,
            installment_value,
            sales_id: sales.id
        })

        return res.json(billtoreceive)
    },
}