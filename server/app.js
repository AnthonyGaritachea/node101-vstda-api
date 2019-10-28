const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

let mock = 
[
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.get('/', (req, res) => {
    res.send({'status': 'ok'})
});

app.get('/api/TodoItems', (req, res) => {
  res.send(mock)
});

app.get('/api/TodoItems/:id', (req, res) => {
  res.send(mock[req.params.id])
});

module.exports = app;
