let knex = require('../knex-init')
let DataLoader = require('dataloader')

function myBatchGetUsers(keys) {
  console.log('keys', keys)
  const ids = keys.map(key => key.id)
  return knex('users').select('*').whereIn('id', ids)
}

let userLoader = new DataLoader(keys => myBatchGetUsers(keys));

// Loading single items
userLoader.load({id:1})
  .then(user => {
    console.log('user with id 1', user)
  })
userLoader.load({id:2})
  .then(user => {
    console.log('user with id 2', user)
  })

// Loading multiple items
userLoader.loadMany([{id:3}, {id:4}])
  .then(users => {
    console.log('user with id 3, 4', users)
  })
