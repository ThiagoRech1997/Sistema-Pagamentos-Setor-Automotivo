const Clients = require('./../models/Clients')

const User = require('./../models/User')
const Addresses = require('./../models/Addresses')
const Cities = require('./../models/Cities')

module.exports = {
    async index(req, res){
        const clients = await Clients.findAll()

        return res.json(clients)
    },
    async store(req, res){
        const { name, email, password, cpf, street, city, uf } = req.body
        let newaddresses = null
        let newcities = null
        let newusers = null

        const findAddresses = await Addresses.findOne({ where: { street } })
        if(!findAddresses){
            newaddresses = await Addresses.create({ street })
        }
        const addresses = (findAddresses) ? findAddresses : newaddresses
        const findCities = await Cities.findOne({ where: { name: city } })
        if(!findCities){
            newcities = await Cities.create({ name: city, uf })
        }
        const cities = (findCities) ? findCities : newcities
        const findUser = await User.findOne({ where: { email } })
        if(!findUser){
            newusers = await User.create({ email , password, access: 'clients' })
        }
        const users = (findUser) ? findUser : newusers


        const clients = await Clients.create({ 
            name, 
            email, 
            cpf,
            addresses_id: addresses.id,
            cities_id: cities.id,
            users_id: users.id 
        })

        return res.json(clients)
    },
}