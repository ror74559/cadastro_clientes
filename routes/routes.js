const express = require('express');
const clientRouter = express.Router();
const clientService = require('../services/ClientService.js');



clientRouter.get('/', clientService.retrieveClient);

clientRouter.post('/', clientService.create);

clientRouter.delete('/:id', clientService.remove);

clientRouter.put('/:id',clientService.update);


module.exports = clientRouter;
