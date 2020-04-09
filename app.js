const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
// Middlewares
app.use('/users', users);
app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

// Page not found
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(4000);
