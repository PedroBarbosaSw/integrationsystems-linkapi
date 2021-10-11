require('custom-env').env('private')

const {
   wonDeals,
   saveOrders,
   sortByDateValue
} = require('../utils/integration.utils')

module.exports = {
   async registerDealAsOrder(req, res) {
      try {
         const deals = await wonDeals()
         return res.status(200).send(deals)
      } catch(err) {
         console.log(err)
         return res.status(400)
      }
   },

   async saveOrders(req, res) {
      try {
         const savedOrders = await saveOrders()
         return res.status(200).send(savedOrders)
      } catch(err) {
         return res.send(400)
      }
   },

   async sort(req, res) {
      try {
         const orderedOrders = await sortByDateValue()
         return res.status(200).send(orderedOrders)
      } catch(err) {
         console.log(err)
         return res.status(400)
      }
   }
}

