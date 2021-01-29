const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express()
const port = 3000;

app.use(express.static('./Public'))
app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  console.log(`Now handling ${req.method} request from ${req.path}`)
  next();
})
app.get('/api/picture-service/:id', (req, res) => {
  axios.get(`http://3.92.211.44:3004${req.path}`)
  .then(response => {res.send(response.data)})
  .catch((err)=>{res.send(err)})
})

app.get('/api/carousels/:id', (req, res) => {
  axios.get(`http://52.12.128.214:3002${req.url}`)
    .then(response => {res.send(response.data)})
    .catch(err => res.send(err));
});

const reviews = 'http://18.222.123.111:3003';

app.get('/api/reviews/:product_id', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.get('/api/reviews/:product_id/images', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.get('/api/reviews/:product_id/images/:place', (req, res) => {
  axios.get(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
});

app.patch('/api/reviews/:product_id/:id', (req, res) => {
  axios.patch(`${reviews}${req.url}`)
    .then((response) => res.send((response.data)))
    .catch(e => console.log(e));
})

app.listen(port, () => {
  console.log(`picture proxy is listening on port ${port}`)
})