import { Router } from "express";
import { ListTypes } from "../repositorys/typeVehicleRepository.js";

let server = Router();


server.get('/veiculos_tipo', async (req, resp) => {
    try {
        let data = await ListTypes();
        resp.send(data)
    } catch (err) { 
        resp.status(500).send({
        erro: err.message
    });
    }
});

export default server;