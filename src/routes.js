const express = require('express')
const routes = express.Router()

const dealsRoute = require('./Routes/dealsRoute')
const ordersRoute = require('./Routes/ordersRoute')
const integrationRoute = require('./Routes/integrationRoute')

module.exports = routes