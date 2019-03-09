const db = require('../db')

const Thing = db.define('thing', {
  name: db.Sequelize.TEXT
})

module.exports = Thing
