'use strict'

const mongoose = require('mongoose')

class Repository {
  constructor (entity) {
    this.model = mongoose.model(entity.name, entity.schema)
  }

  findOne (criteria) {
    return new Promise((resolve, reject) => {
      this.model.findOne(criteria, (error, result) => {
        error ? reject(error) : resolve(result)
      })
    })
  }

  find (criteria) {
    return new Promise((resolve, reject) => {
      this.model.find(criteria).exec((error, result) => {
        error ? reject(error) : resolve(result)
      })
    })
  }

  insert (data) {
    return new Promise((resolve, reject) => {
      this.model.create(data, (error, created) => {
        error ? reject(error) : resolve(created)
      })
    })
  }

  update (id, data) {
    return new Promise((resolve, reject) => {
      this.model.findByIdAndUpdate(id, data, (error, updated) => {
        error ? reject(error) : resolve(this.findOne({ _id: id }))
      })
    })
  }

  delete (_id) {
    return new Promise((resolve, reject) => {
      this.model.remove({ _id }, (error) => {
        error ? reject(error) : resolve(true)
      })
    })
  }
}

module.exports = Repository
