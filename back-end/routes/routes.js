const express = require('express');

const controllers = require('../controllers/controllers.js');

const routes = express.Router();

routes.get('/item', controllers.listar);
routes.post('/chamados', controllers.cadastrar);
routes.put('/chamados/:id', controllers.atualizar);
routes.delete('/chamados/:id', controllers.deletar);

module.exports = routes;