const express = require('express')

const UserController = require('./controllers/UserController')
const AddressesController = require('./controllers/AddressesController')
const CitiesController = require('./controllers/CitiesController')
const EmployeesController = require('./controllers/EmployeesController')
const ClientsController = require('./controllers/ClientsController')
const ProvidersController = require('./controllers/ProvidersController')
const ProductsController = require('./controllers/ProductsController')
const SalesController = require('./controllers/SalesController')
const PurchasesController = require('./controllers/PurchasesController')
const ProductSaleController = require('./controllers/ProductSaleController')
const BillsToReceive = require('./controllers/BillsToReceiveController')
const { route } = require('./server')

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.post('/users/auth', UserController.authentication)

routes.get('/addresses', AddressesController.index)
routes.post('/addresses', AddressesController.store)

routes.get('/cities', CitiesController.index)
routes.post('/cities', CitiesController.store)

routes.get('/employees', EmployeesController.index)
routes.post('/employees', EmployeesController.store)

routes.get('/clients', ClientsController.index)
routes.post('/clients', ClientsController.store)

routes.get('/providers', ProvidersController.index)
routes.post('/providers', ProvidersController.store)

routes.get('/products', ProductsController.index)
routes.post('/products', ProductsController.store)

routes.get('/sales', SalesController.index)
routes.post('/sales', SalesController.store)

routes.get('/purchases', PurchasesController.index)
routes.post('/purchases', PurchasesController.store)

routes.get('/productSale', ProductSaleController.index)
routes.post('/productSale', ProductSaleController.store)

routes.get('/billsToReceive', BillsToReceive.index)
routes.post('/billsToReceive', BillsToReceive.store)

module.exports = routes