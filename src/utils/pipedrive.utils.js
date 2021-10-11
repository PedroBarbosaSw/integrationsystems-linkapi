require('custom-env').env('private')

const axios = require('axios')

const pipedrive_key = process.env.ENV_PIPEDRIVE_API_KEY
const domain_company = process.env.ENV_PIPEDRIVE_COMPANY_DOMAIN

const getDeals = async function () {
   try {
      const deals = await axios
         .get(`https://api.pipedrive.com/api/v1/deals?limit=500&api_token=${pipedrive_key}`)
         .then((res) => {
            return deals_collection = res.data.data
         })
         .catch((err) => {
            console.log(err)
         })
      return deals
   } catch(err) {
      console.log(err)
   }
}

const createDeal = async function (title, orgId, value, status) {
   try {
      const info = { title, orgId, value, status}

      const new_deal = axios.post(`https://${domain_company}.pipedrive.com/v1/deals?api_token=${pipedrive_key}`, 
         info
      )
      .then((res) => {
         deal = res.data.data
         
         return deal
      })
      .catch((err) => {
         console.log(err)
      })
   } catch(err) {
      console.log(err)
   }
}

const filterWonDeals = async function() {
   try {
      const filtered_deals = axios
         .get(`https://api.pipedrive.com/api/v1/deals?limit=500&api_token=${pipedrive_key}`)
         .then((res) => {
            deal = res.data.data
            
            try{
               const deal_won_status = deal.filter(
                  (current) => current.status === 'won' 
               )
               
               const data = deal_won_status
               return data
            } catch(err) {
               console.log('Erro: ' + err)
            }
         })
         .catch((err) => {
            console.log(err)
         })
      return filtered_deals
   } catch(err) {
      console.log(err)
   }
}

const updateDeal = async function (title, status, id) {
   try {
      const info = { title, status }

      const updated_deal = axios
         .put(`https://${domain_company}.pipedrive.com/v1/deals/${id}?api_token=${pipedrive_key}`, 
            info
         )
         .then((res) => {
            deal = res.data
            return deal
         })
         .catch((err) => {
            console.log(err)
         })
      return updateDeal
   } catch(err) {
      console.log(err)
   }
}

module.exports = {
   getDeals,
   createDeal,
   filterWonDeals,
   updateDeal
}