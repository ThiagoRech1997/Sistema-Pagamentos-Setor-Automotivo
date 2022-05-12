const Sequelize = require('sequelize')
const dbConfig = require('./../config/database')

const User = require('./../models/User')
const Addresses = require('./../models/Addresses')
const Cities = require('./../models/Cities')
const Employees = require('./../models/Employees')
const Clients = require('./../models/Clients')
const Providers = require('./../models/Providers')
const Products = require('./../models/Products')
const Sales = require('./../models/Sales')
const Purchases = require('./../models/Purchases')
const ProductSale = require('./../models/ProductSale')
const ProductPurchase = require('./../models/ProductPurchase')
const BillsToReceive = require('./../models/BillsToReceive')
const BillsToPay = require('./../models/BillsToPay')

const connection = new Sequelize(dbConfig)

User.init(connection)
Addresses.init(connection)
Cities.init(connection)
Employees.init(connection)
Employees.associate(connection.models)
Clients.init(connection)
Clients.associate(connection.models)
Providers.init(connection)
Providers.associate(connection.models)
Products.init(connection)
Sales.init(connection)
Sales.associate(connection.models)
Purchases.init(connection)
Purchases.associate(connection.models)
ProductSale.init(connection)
ProductSale.associate(connection.models)
ProductPurchase.init(connection)
ProductPurchase.associate(connection.models)
BillsToReceive.init(connection)
BillsToReceive.associate(connection.models)
BillsToPay.init(connection)
BillsToPay.associate(connection.models)

module.exports = connection