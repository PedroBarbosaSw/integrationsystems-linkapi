const express = require('express')
const routes = express.Router()

const dealsRoute = require('./Routes/dealsRoute')
const ordersRoute = require('./Routes/ordersRoute.js')
const integrationRoute = require('./Routes/integrationRoute')

routes.get('/deals', dealsRoute.getDeals)
routes.get('/wonDeals', dealsRoute.getWonDeals)

routes.put('/updateDeal', dealsRoute.updateDealStatus)
routes.post('/addDeal', dealsRoute.addDeal)

routes.get('/getOrders', ordersRoute.getOrders)
routes.get('/addOrder', ordersRoute.registerNewOrder)

routes.get('/integrate', integrationRoute.registerDealAsOrder)
routes.get('/save', integrationRoute.saveOrders)
routes.get('/sort', integrationRoute.sort)

module.exports = routes