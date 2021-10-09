const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = 8080

const routes = require('./routes')
const dbconfig = require('./db_config')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
   console.log(`Server is up and running at http://localhost:${PORT}`)
})