'use strict'

const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const graphQLHTTP = require('express-graphql')
const schema = require('./schema')
const models = require('./models')

const server = express()

server.use(morgan('dev'))
server.use(bodyParser.json())

server.use('/', graphQLHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

mongoose.connect('mongodb://localhost:27017/graphflix')

server.listen(3000, () => console.log('listening at localhost:3000'))
