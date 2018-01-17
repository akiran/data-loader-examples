// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      user : 'root',
      password : '',
      database : 'sampledb',
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};
