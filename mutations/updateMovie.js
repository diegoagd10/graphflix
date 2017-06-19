'use strict'

const {
  GraphQLID,
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
  description: 'Actualiza una pelicula',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    synopsis: {
      name: 'synopsis',
      type: GraphQLString
    },
    image: {
      name: 'image',
      type: GraphQLString
    }
  },
  resolve: (root, movie) => movieRepository.update(movie.id, movie)
}
