const Providers = require('./../models/Providers')

const User = require('./../models/User')
const Addresses = require('./../models/Addresses')
const Cities = require('./../models/Cities')

module.exports = {
    async index(req, res){
        const providers = await Providers.findAll()

        return res.json(providers)
    },
    async store(req, res){
        const { name, email, cnpj, street, city, uf } = req.body
        let newaddresses = null
        let newcities = null

        const findAddresses = await Addresses.findOne({ where: { street } })
        if(!findAddresses){
            newaddresses = await Addresses.create({ street })
        }
        const addresses = newaddresses
        const findCities = await Cities.findOne({ where: { city } })
        if(!findCities){
            newcities = await Cities.create({ name: city, uf })
        }
        const cities = newcities

        const providers = await Providers.create({ 
            name, 
            email, 
            cnpj,
            addresses_id: addresses.id,
            cities_id: cities.id,
        })

        return res.json(providers)
    },
}