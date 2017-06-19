'use strict'

const {
  GraphQLList
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
  type: new GraphQLList(MovieType),
  description: 'Regresa un listado de peliculas',
  args: {},
  resolve: (root, criteria) => movieRepository.find(criteria)
}
