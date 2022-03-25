const Employees = require('./../models/Employees')

const User = require('./../models/User')
const Addresses = require('./../models/Addresses')
const Cities = require('./../models/Cities')

module.exports = {
    async index(req, res){
        const employees = await Employees.findAll()

        return res.json(employees)
    },
    async store(req, res){
        const { name, email, password, street, city, uf } = req.body
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
        const users = await User.create({ email , password, access: 'employees' })

        const employees = await Employees.create({ 
            name, 
            email, 
            addresses_id: addresses.id,
            cities_id: cities.id,
            users_id: users.id 
        })

        return res.json(employees)
    },
}