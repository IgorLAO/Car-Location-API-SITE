import config from '../repositorys/connectionDB.js';

export async function ListCars(){
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



export async function consult(busca) {
    let comando = `
        select id_vehicle   			    as id,
        DS_TYPE				    AS Tipo,
        DS_MODEL				AS Modelo,
        DS_BRAND				AS Marca,
        NR_YEAR					AS Ano,
        DS_PLATE				AS Placa
    FROM	TB_VEHICLE			    AS V

    inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
          where DS_MODEL     like ?
             or DS_MODEL     like ?
             or DS_PLATE     like ?`
  
    let [dados] = await config.query(comando,
      [
        '%' + busca + '%',
        '%' + busca + '%',
        '%' + busca + '%'
      ])
    return dados;
  }


export async function Update(id, V){
    let sql = ` 
    update TB_VEHICLE
    SET
        ID_TYPE         = ?,
        DS_MODEL		= ?,
        DS_BRAND		= ?,
        NR_YEAR			= ?,
        DS_PLATE        = ?
  WHERE ID_VEHICLE     = ?`
        
    let [resp] = await config.query(sql, [
        V.idTipo,
        V.Modelo,
        V.Marca,
        V.Ano,
        V.Placa,
        id
    ]);
console.log(resp)
    return resp
};

