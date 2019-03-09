const db = require('./db')
const { Favorite, User, Thing } = require('./models')

User.hasMany(Favorite)
Thing.hasMany(Favorite)
Favorite.belongsTo(User)
Favorite.belongsTo(Thing)

module.exports = () => {
  return db.sync({ force: true }).then(async () => {
    const [curly, larry, moe, shep] = await Promise.all([
      User.create({ name: 'curly' }),
      User.create({ name: 'larry' }),
      User.create({ name: 'moe' }),
      User.create({ name: 'shep' })
    ])

    const things = ['bar', 'bazz', 'foo', 'quip', 'quq']
    const [bar, bazz, foo, quip, quq] = await Promise.all(things.map(name => Thing.create({ name })))

    await Promise.all([
      Favorite.create({ rank: 1, userId: larry.id, thingId: bar.id }),
      Favorite.create({ rank: 2, userId: larry.id, thingId: bazz.id }),
      Favorite.create({ rank: 1, userId: moe.id, thingId: bazz.id }),
      Favorite.create({ rank: 5, userId: moe.id, thingId: bar.id }),
      Favorite.create({ rank: 7, userId: moe.id, thingId: foo.id })
    ])
  })
}
