const Purchases = require('./../models/Purchases')

const Providers = require('./../models/Providers')

module.exports = {
    async index(req, res){
        const purchases = await Purchases.findAll()

        return res.json(purchases)
    },
    async store(req, res){
        const { providers_id } = req.body

        const providers = await Providers.findByPk(providers_id)
        if(!providers){
            return res.status(400).json({ error: 'Provider not found' })
        }

        const purchases = await Purchases.create({ 
            providers_id
        })

        return res.json(Purchases)
    },
}