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
   }
}

