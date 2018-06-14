const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const port = 3000;
const request = require('request');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


app.get('/productDetails/:id', (req, res) => {
  console.log(`http://localhost:3001${req.url}`)
  axios.get(`http://localhost:3001${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});

app.get('/reviews/:id', (req, res) => {
  console.log(`http://localhost:3002${req.url}`);
  request(`http://localhost:3002${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.get('/youMayAlsoLike/:id', (req, res) => {
  axios.get(`http://localhost:3003${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});

app.get('/products/:id/images', (req, res) => {
  axios.get(`http://localhost:3004${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});  

