let _ = require("lodash")
let faker = require("faker")

exports.up = async function(knex, Promise) {
  await knex.schema.createTableIfNotExists('users', (t) => {
    t.increments('id').unsigned()
    t.string('first_name')
    t.string('last_name')
  })
  const users = _.range(10).map(id => ({
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName()
  }))
  await knex('users').insert(users)
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
