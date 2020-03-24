const express = require('express');

const connection = require('./database/connection');
const OngController = require('./controllers/OngController');
const IncedentesController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncedentesController.index);
routes.post('/incidents', IncedentesController.create);
routes.delete('/incidents/:id', IncedentesController.delete);

module.exports = routes;