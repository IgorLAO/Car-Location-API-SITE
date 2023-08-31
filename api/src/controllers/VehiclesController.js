import { Router } from "express";
import { AddVehicle, Delete, ListCars, Seraching, Update } from "../repositorys/carRepository.js";

let server = Router();

server.get('/veiculos', async (req, resp) => {
        try {

                let res = await ListCars()
                resp.send(res)

        } catch (err) {
                resp.status.send({ erro: err.message })
        }
});

server.get('/veiculo', async (req, resp) => {
        try {
                let search = req.query.search;
                let res = await Seraching(search);
                resp.send(res);
        } catch (err) {
                resp.status(500).send({ erro: err.message })
        }
});

server.post('/veiculos', async (req, resp) => {
        try {
                let add = req.body




                if (!add.Modelo)
                        throw new Error(' o modelo é obrigatorio ')

                if (!add.Ano)
                        throw new Error(' o ano é obrigatorio');

                if (!add.Placa)
                        throw new Error(' a placa é obrigatoria ');

                if (!add.Ano)
                        throw new Error(' o ano é obrigatorio ');

                if (add.Ano.toString().length !== 4 || isNaN(add.Ano)) 
                        throw new Error('ano invalido');

                if (add.Placa.length < 7 || add.Placa.length > 7)
                        throw new Error(' Placa invalida ');


                let res = await AddVehicle(add)
                resp.send(res)
        } catch (err) {
                resp.status(500).send({ erro: err.message })
        }
});

server.put('/veiculos/:id', async (req, resp) => {
        try {
                let insertID = req.params.id
                let addBOdy = req.body

                if (!addBOdy.Modelo)
                        throw new Error('o modelo é obrigatorio');

                if (!addBOdy.Ano)
                        throw new Error('o ano é obrigatorio');

                if (isNaN(addBOdy.Ano))
                        throw new Error(' o ano deve ser um numero ');

                if (addBOdy.Ano.length > 4)
                        throw new Error(' data invalida ');

                if (addBOdy.Ano.length < 4)
                        throw new Error(' data invalida ');

                if (!addBOdy.Placa)
                        throw new Error(' placa é obrigatorio ');

                if (addBOdy.Placa.length > 7)
                        throw new Error('a placa deve ter menos caracteres');

                if (addBOdy.Placa.length < 7)
                        throw new Error('a placa deve ter mais caracteres');

                const resposta = await Update(insertID, addBOdy);
                resp.send(resposta);
        } catch (err) {
                resp.status(500).send({ erro: err.message });
        }
});

server.delete('/veiculos/:id', async (req, resp) => {
        try {
                let addID = req.params.id
                let res = await Delete(addID)
                resp.status(200).send()
        } catch (err) {
                resp.status(500).send({ erro: err.message })
        }
});

export default server;  