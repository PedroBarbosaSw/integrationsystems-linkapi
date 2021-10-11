const mongoose = require('mongoose')

const BalanceSchema = new mongoose.Schema({
   orderId: {
      type: Number,
      required: true
   },
   orderDate: {
      type: Date,
      required: true
   },
   amount: {
      type: Number,
      required: true
   },
   orgName: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model("Balance", BalanceSchema)