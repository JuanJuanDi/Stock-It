const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
const stockRoutes = require('./routes/stock.routes');
app.use('/api/stock', stockRoutes);

module.exports = app;
