const {
   createDeal,
   getDeals,
   filterWonDeals,
   updateDeal
} = require('../utils/pipedrive.utils')

module.exports = {
   async getDeals(req, res) {
      try {
         let deals = await getDeals()
         console.log(`Há ${deals.length} negócios disponíveis.`)
      }
      catch (err) {
         res.status(400).send(err)
      }
   }
}