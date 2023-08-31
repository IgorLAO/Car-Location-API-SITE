import { Router } from "express";
import { Search } from "./clientsRepository.js";
import config from '../repositorys/connectionDB.js';

export async function SearchByID(id) {
    let sql = `
    SELECT * FROM TB_TYPE_VEHICLE WHERE ID_TYPE = ?`;

    let resp = await config(sql, [id])
    return resp
};

export async function listTypes(){
    let sql = `
        SELECT      DS_TYPE  AS Tipo 
        FROM        TB_TYPE_VEHICLE`; 
    let [resp] = await config.query(sql)
    return resp
}