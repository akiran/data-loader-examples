// Update with your config settings.
let _ = require('lodash')

function camelCaseObject(data) {
  const fields = Object.keys(data)
  return fields.reduce((acc, field) => {
    const camelCasedField = _.camelCase(field)
    return {...acc, [camelCasedField]: data[field]}
  }, {})
}

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
    },
    postProcessResponse: (result) => {
      if (Array.isArray(result)) {
        return result.map(row => camelCaseObject(row));
      } else {
        return camelCaseObject(result);
      }
    }
  }
};
