const db = require('../db')

const User = db.define('user', {
  name: db.Sequelize.TEXT
})

module.exports = User
