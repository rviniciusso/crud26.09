const express = require('express');

const controllers = require('../controllers/controllers.js');

const routes = express.Router();

routes.get('/item', controllers.listar);
routes.post('/item', controllers.cadastrar);
routes.put('/item/:id', controllers.atualizar);
routes.delete('/item/:id', controllers.deletar);

module.exports = routes;