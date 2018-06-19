const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const port = 3000;
const request = require('request');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id', express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});


app.get('/productDetails/:id', (req, res) => {
  // console.log(`http://localhost:3001${req.url}`)
  axios.get(`http://18.219.25.187${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});

app.get('/reviews-module/reviews/:id', (req, res) => {
  console.log(`http://54.183.143.240${req.url}`);
  request(`http://54.183.143.240${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.put('/reviews-module/reviews', (req, res) => {
  console.log('req.body', req.body);
  axios.put(`http://54.183.143.240${req.url}`, req.body)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      throw (err);
    });
});

app.get('/youMayAlsoLike/:id', (req, res) => {
  axios.get(`http://18.188.58.255${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});

app.get('/images/:id', (req, res) => {
  axios.get(`http://138.197.208.221${req.url}`)
    .then((response) => {
      console.log('this is the response', response.data)
      res.send(response.data);
    })
    .catch((err) => {
      console.log('your axios has an error', err)
    });
});  

