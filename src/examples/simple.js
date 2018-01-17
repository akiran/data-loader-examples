 let DataLoader = require('dataloader')

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Doe'},
  {id: 3, name: 'James'},
  {id: 4, name: 'Elon'},
]

function myBatchGetUsers(keys) {
  console.log(keys, 'keys')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users.filter(user => keys.find((key) => key.id === user.id)))
    }, 10)
  })
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
