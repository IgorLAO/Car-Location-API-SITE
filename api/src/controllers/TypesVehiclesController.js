import { Router } from "express";
import { listTypes } from "../repositorys/TypeVehiclesRepository.js";

let server = Router();

server.get('/veiculos/tipos', async (req, resp) => {
    let promise = await listTypes()
    resp.send(promise)
})


export default server