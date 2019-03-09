const db = require('./db')
const syncAndSeed = require('./seed')
const models = require('./models')

module.exports = {
  db,
  models,
  syncAndSeed
}
