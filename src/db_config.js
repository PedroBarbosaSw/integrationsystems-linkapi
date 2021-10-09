require('custom-env').env('private')
const mongoose = require('mongoose')

const user = process.env.ENV_DATABASE_USER
const password = process.env.DATABASE_PASSWORD

