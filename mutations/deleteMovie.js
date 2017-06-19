'use strict'

const {
  GraphQLID,
  GraphQLBoolean,
  GraphQLNonNull
} = require('graphql')
const {
  Movie
} = require('../models')
const Repository = require('../lib/repository')

const movieRepository = new Repository(Movie)

module.exports = {
  type: GraphQLBoolean,
  description: 'Elimina una pelicula por id',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, { id }) => movieRepository.delete(id)
}
