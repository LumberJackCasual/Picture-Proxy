const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;

app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  console.log(`Now handling ${req.method} request from ${req.path}`)
  next();
})

app.use(express.static('./Public'))

app.listen(port, () => {
  console.log(`picture proxy is listening on port ${port}`)
})