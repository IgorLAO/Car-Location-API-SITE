CREATE DATABASE ELITE_WHEELS_DB;

USE ELITE_WHEELS_DB;

CREATE TABLE CLIENTS_TB(
	ID_CLIENT					INT PRIMARY KEY auto_increment,
    NM_CLIENT					VARCHAR(100),
    DS_EMAIL					VARCHAR(200),
    DS_TELEFONE					VARCHAR(100),
    DS_CPF						VARCHAR(100),
    DS_CNH						VARCHAR(100)
);

drop table CLIENTS_TB;

SELECT * FROM CLIENTS_TB;

 UPDATE CLIENTS_TB 
        SET NM_CLIENT = 'jajajja',
        DS_EMAIL = 'aaaaaaa',
        DS_TELEFONE = '1111111111', 
        DS_CPF ='1111111111111', 
        DS_CNH = '111111111111111'
        WHERE ID_CLIENT = 2;