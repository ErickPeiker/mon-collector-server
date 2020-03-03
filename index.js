const listEndpoints = require('express-list-endpoints');
const express = require('express');
const bodyParser = require('body-parser');

//Configurações da aplicação
const app = express();
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

//Startup do banco MySql
const db = require('./src/models-mysql');
db.sequelize.sync();

//Startup da aplicação
app.use('/api', require('./routes'));
app.listen(3000);
console.log(listEndpoints(app));
