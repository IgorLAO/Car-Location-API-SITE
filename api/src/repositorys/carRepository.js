import config from '../repositorys/connectionDB.js';

export async function ListCars() {
  let sql = `
            SELECT  ID_VEHICLE          AS id,
                DS_TYPE				    AS Tipo,
                DS_MODEL				AS Modelo,
                DS_BRAND				AS Marca,
                NR_YEAR					AS Ano,
                DS_PLATE				AS Placa
        FROM	TB_VEHICLE			    AS V
        INNER JOIN TB_TYPE_VEHICLE 	    AS _TYPES ON _TYPES.ID_TYPE = V.ID_TYPE;  
    `
  let [resp] = await config.query(sql)
  return resp
};



export async function Seraching(search) {
  let sql = `
    select  ID_VEHICLE          AS id,
            DS_TYPE				      AS Tipo,
            DS_MODEL				    AS Modelo,
            DS_BRAND				    AS Marca,
            NR_YEAR					    AS Ano,
            DS_PLATE				    AS Placa
      FROM  TB_VEHICLE			    AS V
      INNER JOIN TB_TYPE_VEHICLE AS TBV ON TBV.ID_TYPE = V.ID_TYPE
    WHERE DS_MODEL LIKE ?
      OR  DS_BRAND LIKE ?
      OR  DS_PLATE LIKE ? `

  let [data] = await config.query(sql, [
      '%' + search + '%',
      '%' + search + '%',
      '%' + search + '%'
  ]);
  return data
}

export async function AddVehicle(v) {
  let sql = `
      INSERT INTO TB_VEHICLE (ID_TYPE, DS_MODEL, DS_BRAND, NR_YEAR, DS_PLATE)
             VALUES(?, ?, ?, ?, ?)`;

  let [resp] = await config.query(sql, [
  v.idTipo,
  v.Modelo,
  v.Marca,
  v.Ano,
  v.Placa]);

  return resp
};

export async function Update(id, V) {
  let sql = ` 
    update TB_VEHICLE
  SET
        ID_TYPE     = ?,
        DS_MODEL		= ?,
        DS_BRAND		= ?,
        NR_YEAR			= ?,
        DS_PLATE    = ?
  WHERE ID_VEHICLE  = ?`

  let [resp] = await config.query(sql, [
    V.idTipo,
    V.Modelo,
    V.Marca,
    V.Ano,
    V.Placa,
    id
  ]);
  return resp
};





export async function Delete(id) {
  let sql = `DELETE FROM TB_VEHICLE
                    WHERE id_VEHICLE = ?`
  let [resp] = await config.query(sql, id);

  return resp.affectedRows
};