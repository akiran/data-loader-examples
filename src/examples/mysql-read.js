let knex = require('./knex-init')

async function readUsers() {
 const users = await knex('user').select('*')
 console.log('user data', users)
}

async function run() {
  await readUsers()
  knex.destroy()
}

run()
