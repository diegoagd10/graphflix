'use strict'

const {
  Types,
  Schema
} = require('mongoose')

const Movie = {
  name: 'Movies',
  schema: new Schema({
    title: {
      type: String,
      unique: true,
      required: true,
      dropDups: true
    },
    synopsis: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  })
}

module.exports = Movie
