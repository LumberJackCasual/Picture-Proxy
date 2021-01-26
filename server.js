const express = require('express');
const app = express()
const port = 3000;

app.use('/', (req, res, next) => {
  console.log(`Now handling ${req.method} request`)
  next();
})

app.use(express.static('./Public'))

app.listen(port, () => {
  console.log(`picture proxy is listening on port ${port}`)
})