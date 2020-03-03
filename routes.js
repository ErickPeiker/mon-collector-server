const express = require('express');
const routes = express.Router();

const companyController = require('./src/controller/companyController');
const equipmentTypeController = require('./src/controller/equipmentTypeController');
const itemTypeController = require('./src/controller/itemTypeController');
const equipmentController = require('./src/controller/equipmentController');
const incidentController = require('./src/controller/incidentController');
const historyMinuteController = require('./src/controller/historyMinuteController');

routes.get('/company/:idcompany', companyController.find);
routes.get('/equipment-types', equipmentTypeController.find);
routes.get('/item-types', itemTypeController.find);

routes.put('/incident', incidentController.remove);

routes.post('/equipments', equipmentController.create);
routes.post('/incident', incidentController.create);
routes.post('/history-minute', historyMinuteController.create);

module.exports = routes;