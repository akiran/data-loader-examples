exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (t) => {
    t.increments('id').unsigned()
    t.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
