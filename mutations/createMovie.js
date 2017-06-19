'use strict'

const {
  GraphQLString,
  GraphQLNonNull
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
  description: 'Crea una nueva pelicula',
  args: {
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString)
    },
    synopsis: {
      name: 'sypnosis',
      type: new GraphQLNonNull(GraphQLString)
    },
    image: {
      name: 'image',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: (root, movie) => movieRepository.insert(movie)
}
