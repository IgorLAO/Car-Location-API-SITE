import { Router } from "express";
import { Search } from "./clientsRepository";
import config from '../repositorys/connectionDB.js';

export async function SearchByID(id) {
    let sql = `
    SELECT * FROM TB_TYPE_VEHICLE WHERE ID_TYPE = ?`;

    let resp = await config(sql, [id])
    return resp
};