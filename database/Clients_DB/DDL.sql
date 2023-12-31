CREATE DATABASE ELITE_WHEELS_DB;

USE ELITE_WHEELS_DB;

CREATE TABLE CLIENTS_TB(
	ID_CLIENT					INT PRIMARY KEY auto_increment,

    NM_CLIENT					VARCHAR(100) NOT NULL,
    DS_EMAIL					VARCHAR(200) NOT NULL,
    DS_TELEFONE					VARCHAR(100) NOT NULL,
    DS_CPF						VARCHAR(100) NOT NULL,
    DS_CNH						VARCHAR(100) NOT NULL
);


CREATE TABLE TYPES_CARS_TB(	
	ID_TYPE		INT primary KEY auto_increment,
    NM_TYPE		VARCHAR(100) NOT NULL
);
	
CREATE TABLE CARS_TB(
	ID_CAR				INT primary KEY auto_increment,
    ID_TYPE				INT NOT NULL,
    DS_MODEL			VARCHAR (100) NOT NULL,
    DS_BRAND			VARCHAR (100) NOT NULL,
    NR_YEAR				DATE,
    DS_PLACA			VARCHAR (100),
    FOREIGN KEY (ID_TYPE) REFERENCES TYPES_CARS_TB(ID_TYPE)
);
	


 UPDATE CLIENTS_TB 
        SET NM_CLIENT = 'jajajja',
        DS_EMAIL = 'aaaaaaa',
        DS_TELEFONE = '1111111111', 
        DS_CPF ='1111111111111', 
        DS_CNH = '111111111111111'
        WHERE ID_CLIENT = 2;
        
create table TB_TYPE_VEHICLE(
	ID_TYPE			int primary key auto_increment,
    DS_TYPE				varchar(200) not null
    
CREATE TABLE LOCATION_TB(
	ID_LOCATION			INT PRIMARY KEY auto_increment NOT NULL,
    ID_CLIENT			INT NOT NULL,
    ID_CAR				INT NOT NULL,
    NM_KM_RETIRADA		VARCHAR(50) NOT NULL,
    DT_LOCATION			DATETIME NOT NULL,
    BT_IS_SECURE		BOOL NOT NULL,
    DS_OBSERVATION		VARCHAR(80) NOT NULL,
    DS_SITUAITON		VARCHAR(50) NOT NULL,
    NR_KM_ENTREGA		INT NOT NULL,
    DT_ENTREGA			DATETIME NOT NULL,
    VL_TOTAL			DECIMAL(15,2) NOT NULL,
    FOREIGN KEY (ID_CLIENT) REFERENCES CLIENTS_TB(ID_CLIENT),
    FOREIGN KEY (ID_CAR) REFERENCES CARS_TB(ID_CAR)
);



DROP table TB_VEHICLE;














