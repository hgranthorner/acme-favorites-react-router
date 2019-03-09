const express = require('express')
const path = require('path')
const app = express()
const { models } = require('./api')
const { Favorite, User, Thing } = models

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/users', (req, res, next) => {
  User.findAll({
    include: [
      {
        model: Favorite,
        include: [Thing]
      }
    ]
  })
    .then(data => res.send(data))
    .catch(next)
})

app.get('/things', (req, res, next) => {
  Thing.findAll({
    include: [
      {
        model: Favorite,
        include: [User]
      }
    ]
  })
    .then(data => res.send(data))
    .catch(next)
})

module.exports = app
