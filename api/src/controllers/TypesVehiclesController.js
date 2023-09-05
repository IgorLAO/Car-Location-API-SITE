import { Router } from "express";
import { listTypes } from "../repositorys/TypeVehiclesRepository.js";

let server = Router();

server.get('/veiculos/tipos', async (req, resp) => {
    try {
        let res = await listTypes();
        resp.send(res)
    } catch (err) {
        resp.status(500).send({Error: err.message})
    }
    
})


export default server