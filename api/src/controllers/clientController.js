import { Router } from "express";
import { AddClient, Delete, List, Search, Update } from "../repositorys/clientsRepository.js";

let server = Router();

server.get('/cliente', async (req, resp) => {
    try {
        const res = await List();
        resp.send(res)
    } catch (err) {

        resp.status(500).send({ erro: err.message });

    }
});

server.post('/cliente', async (req, resp) => {
    try {
        const add = req.body

        let get = await List();
        console.log(get);

        if (!add.Nome)
            throw new Error(' Nome obrigatorio ');

        if (!add.Email)
            throw new Error(' Email é obrigatorio ');

        if (!add.Telefone)
            throw new Error(' Telefone é obrigatorio ');

        if (!add.CPF)
            throw new Error(' CPF é obrigatorio ');

        if (isNaN(add.CPF) || add.CPF.toString().lenght < 11 && add.CPF.toString().lenght !== 11)
            throw new Error(' CPF invalido ');
        if (!add.CNH)
            throw new Error(' CNH é obrigatoria ');


        const res = await AddClient(add);
        resp.send(res);

    } catch (err) {
        resp.status(500).send({
            error: err.message
        });
    }
});



server.put('/cliente/:id', async (req, resp) => {
    try {
        let addId = req.params.id
        let add = req.body
        const resposta = await Update(addId, add)

    } catch (err) {

        resp.status(500).send({ erro: err.message });

    }

})

server.get('/cliente/buscar', async (req, resp) => {
    try {
        const [nome] = req.query
        const data = await Search(nome);

        if (data.lenght = 0)
            throw new Error('nao encontrado')
        resp.send(data)
    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

server.delete('/cliente/:id', async (req, resp) => {
    try {
        const addId = req.params.id

        const resposta = await Delete(addId)
        resp.status(204).send()
    } catch (err) {
        resp.status(500).send({
            error: err.message
        });
    }
});


export default server;