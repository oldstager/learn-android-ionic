const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

let users = {
  1: {
    id: '1',
    username: 'Robin Wieruch',
  },
  2: {
    id: '2',
    username: 'Dave Davids',
  },
};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/users', (req, res) => {
    return res.send(Object.values(users));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
