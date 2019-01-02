const express = require('express');
const parser = require('body-parser');
const path = require('path');
const router = require('./routes');
const PORT = 1337;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/', router);

app.listen(PORT, () => {
  console.log('Server is listening to port: ', PORT);
});
