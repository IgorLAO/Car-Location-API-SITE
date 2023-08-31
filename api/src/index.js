import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import clientController from './controllers/clientController.js'
import VehiclesController from './controllers/VehiclesController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.listen(process.env.PORT, console.log(`
   online na porta ${process.env.PORT}
`));

server.use(clientController)
server.use(VehiclesController)
