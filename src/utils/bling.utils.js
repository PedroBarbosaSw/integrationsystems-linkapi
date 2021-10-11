require('custom-env').env('private')
const axios = require('axios')

const bling_key = process.env.ENV_PIPEDRIVE_API_KEY

const getOrders = async function() {
   try {
      let orders = await axios
         .get(`https://bling.com.br/Api/v2/pedidos/json?apikey=${bling_key}`)
         .then((res) => {
            const orders_collection = res.data

            try {
               if(orders_collection) 
                  return orders_collection

                  return 'No order available'
            } catch(err) {
               return err
            }
         })
         .catch((err) => {
            console.log(err)
         })
      return orders
   } catch(err) {
      console.log(err)
      return err
   }
}

const registerOrder = async function(order) {
   try {
      const order_xml = await xml_request(order)

      const newOrder = axios
         .post(`https://bling.com.br/Api/v2/pedido/json?apikey=${bling_key}&xml=${order_xml}`)
         .then((res) => {
            new_order = res.data

            return new_order
         })
         .catch((err) => {
            console.log(err)
         })
      return newOrder
   } catch(err) {
      return err
   }
}

module.exports = {
   getOrders,
   registerOrder
}