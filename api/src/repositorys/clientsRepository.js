import config from '../repositorys/connectionDB.js';

export async function List() {
    let sql = ` 
    SELECT 
            NM_CLIENT      AS Nome,
            DS_EMAIL       AS Email,
            DS_TELEFONE    AS Telefone,
            DS_CPF         AS  CPF, 
            DS_CNH         AS CNH
    FROM CLIENTS_TB`;
    let [resp] = await config.query(sql)

    return resp
};

export async function AddClient(C) {
    let sql = `
    INSERT INTO CLIENTS_TB(NM_CLIENT,
            DS_EMAIL,
            DS_TELEFONE,
            DS_CPF, 
            DS_CNH )
			VALUES(?, ?, ?, ?, ?)`;

    let [response] = await config.query(sql, [C.Nome, C.Email, C.Telefone, C.CPF, C.CNH])

    return response
};

export async function Update(id, C) {
    let sql = `
    UPDATE CLIENTS_TB
           SET NM_CLIENT = ?,
           DS_EMAIL = ?,
           DS_TELEFONE = ?, 
           DS_CPF =?, 
           DS_CNH = ?
           WHERE ID_CLIENT = ?`;

    let [resp] = await config.query(sql, [C.name, C.email, C.telefone, C.cpf, C.cnh, id])
    return resp.affectedRows
}


export async function Delete(id) {
    let sql = `DELETE FROM CLIENTS_TB
                    WHERE ID_CLIENT = ?`
    let [resp] = await config.query(sql, id) 
    console.log(resp)
    return resp.affectedRows
}

export async function Search(nome) {
    let sql = `SELECT *
    FROM CLIENTS_TB
    WHERE NM_CONTATO LIKE ?`;

    let [resp] = await config.query(sql, [`%${nome}%`])
    return resp[0]
}
