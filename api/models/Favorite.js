const db = require('../db')

const Favorite = db.define('favorite', {
  rank: db.Sequelize.INTEGER
})

module.exports = Favorite
