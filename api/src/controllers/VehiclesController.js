import { Router } from "express";
import { ListCars, Update } from "../repositorys/carRepository.js";

let server = Router();

server.get('/veiculos', async (req, resp) =>{
        let promise2 = await ListCars()

        resp.send(promise2)
        console.log(promise2)

    
})

server.put('/veiculos/:id', async (req, resp) =>{
        let insertID = req.params.id
        let addBOdy = req.body

        const resposta = await Update(insertID, addBOdy)
        resp.send(resposta)
});

export default server;  