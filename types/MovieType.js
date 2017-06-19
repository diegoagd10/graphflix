'use strict'

const {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} = require('graphql')

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    synopsis: { type: GraphQLString },
    image: { type: GraphQLString }
  })
})

module.exports = MovieType
