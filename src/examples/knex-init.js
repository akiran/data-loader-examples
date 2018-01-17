let knexfile = require('../../knexfile')
let Knex = require('knex')

const cfg = knexfile.development

module.exports = Knex(cfg)
