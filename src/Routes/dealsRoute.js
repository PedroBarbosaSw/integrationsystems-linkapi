require('custom-env').env('private')

const { response } = require('express')
const {
   getDeals,
   filterWonDeals,
   createDeal,
   updateDeal
} = require('../utils/pipedrive.utils')

module.exports = {
   async getDeals(req, res) {
      try {
         const deals = await getDeals()
         
         console.log(`There are ${deals.length} deals available.`)
         
         res.stauts(200).send(deals)
      } catch(err) {
         res.status(400).send(err)
      } 
   },

   async getWonDeals(req, res) {
      try {
         const deals = await filterWonDeals()

         console.log(`There are ${deals.length} won deals available`)

         res.status(200).send(deals)
      } catch(err) {
         res.status(400).send(err)
      }
   },

   async addDeal(req, res) {
      try {
         const { title, orgId, value, status } = request.body

         if(!title | !orgId)
            res.status(400).send('Error: Required field is missing')
         
            const newDeal = await createDeal(title, orgId, value, status)

            res.status(200).send(newDeal)
      } catch(err) {
         res.status(400).send(err)
      }
   },

   async updateDealStatus(req, res) {
      try {
         const { title, status, id} = request.body

         if(!title | !id)
            return res.status(400).send('Fields title and id are required')

         if(status !== "won" && status !== "lost")
            return res.status(400).send('Value not accepted')
         
         const deal = await updateDeal(title, status, id)
         res.status(200).send(deal)
      } catch(err) {
         res.status(400).send(err)
      }
   }
}