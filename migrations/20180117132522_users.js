let _ = require("lodash")
let faker = require("faker")

exports.up = async function(knex, Promise) {
  await knex.schema.createTableIfNotExists('users', (t) => {
    t.increments('id').unsigned()
    t.string('firstName')
    t.string('lastName')
  })
  const users = _.range(10).map(id => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  }))
  await knex('users').insert(users)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
