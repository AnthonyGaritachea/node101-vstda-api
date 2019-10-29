const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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
  let toDoIndex = mock.find(item =>  item.todoItemId === parseInt(req.params.id));
  res.send(toDoIndex) 
});

app.post('/api/TodoItems', (req, res) => {
  let mockToDo = {
    todoItemId: mock.length + 1,
    name: req.body.name,
    priority: req.body.priority,
    completed: req.body.completed
  };
  mock.push(mockToDo);
  res.status(201).send(req.body);
});

app.delete('/api/TodoItems/:id', (req, res) => {
  let selectedItem = mock.find(item =>  item.todoItemId === parseInt(req.params.id));
  mock.splice(selectedItem, 1);
  res.send(selectedItem)
});

module.exports = app;
