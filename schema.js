'use strict'

const {
  GraphQLSchema,
  GraphQLString,
  GraphQLObjectType
} = require('graphql')
const queries = require('./queries')
const mutations = require('./mutations')

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Objeto query',
  fields: () => queries
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Objeto mutation',
  fields: () => mutations
})

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})
