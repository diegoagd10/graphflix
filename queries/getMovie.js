'use strict'

const {
  GraphQLID
} = require('graphql')
const {
  MovieType
} = require('../types')
const {
  Movie
} = require('../models')
const Repository = require('../lib/repository')

const movieRepository = new Repository(Movie)

module.exports = {
  type: MovieType,
  description: 'Recupera una pelicula.',
  args: {
    _id: {
      name: '_id',
      type: GraphQLID
    }
  },
  resolve: (root, criteria) => movieRepository.findOne(criteria)
}
