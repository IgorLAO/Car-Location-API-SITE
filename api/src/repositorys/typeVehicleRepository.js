import config from "./connectionDB.js";


export async function ListTypes(){
    let sql = `
        SELECT *
            FROM TYPES_CARS_TB`

    const [resp] = await config.query(sql);
    return resp
};