const express = require('express')
const lib = require('pipedrive')

const app = express()
const PORT = 8080

lib.Configuration.apiToken = '16f06a7e97c6f2488818f4022174294e4b7c8159'

app.get('/', async (req , res) => {
   const user = await lib.UsersController.getCurrentUserData()
   
   res.send(user)   
});
app.listen(PORT, () => {
   console.log(`Server is up and running at http://localhost:${PORT}`)
})