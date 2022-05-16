const ProductSale = require('../models/ProductSale')

module.exports = {
    async index(req, res){
        const productSale = await ProductSale.findAll()

        return res.json(productSale)
    },
    async store(req, res){
        const { products, sales } = req.body
        
        const productSale = await ProductSale.create({ 
            products_id: products.id,
            sales_id: sales.id,
            unitary_value: products.value,
            amount: 1
        })

        return res.json(productSale)
    },
}