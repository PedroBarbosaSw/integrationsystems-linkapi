require('custom-env').env('private')
const mongoose = require('mongoose')

const user = process.env.ENV_DATABASE_USER
const password = process.env.DATABASE_PASSWORD

function databaseConnection() {
   mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.wnkb1.mongodb.net/integration?retryWrites=true&w=majority`,
      { userNewUrlParser: true, useUnifiedTopology: true }
   );

   const db = mongoose.connection
   db.on('error', (error) => console.log(error))
   db.once('open', () => console.log('Connected to the database'))
}

module.exports = databaseConnection