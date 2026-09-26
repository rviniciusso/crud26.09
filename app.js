const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', routes);
app.use(express.static('./frontend'));

module.exports = app;
