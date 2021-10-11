require('custom-env').env('private')

const {
   getOrders,
   registerOrder
} = require('../utils/bling.utils')

module.exports = {
   async getOrders(req, res) {
      try {
         const orders = await getOrders()
         return res.status(200).send(orders)
      } catch(err) {
         return res.status(400)
      }
   },

   async registerNewOrder(req, res) {
      try {
         const order = req.body
         const newOrder = await registerOrder(order)
      } catch(err) {
         return res.status(400)
      }
   }
}