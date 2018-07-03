const express = require('express')
const router = express.Router()
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use('/articles/',require('./routes/articles'))
  .use('/article/',require('./routes/article'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))