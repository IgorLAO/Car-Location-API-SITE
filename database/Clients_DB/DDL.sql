CREATE DATABASE ELITE_WHEELS_DB;



USE ELITE_WHEELS_DB;

CREATE TABLE CLIENTS_TB(
	ID_CLIENT					INT PRIMARY KEY auto_increment,
<<<<<<< HEAD
    NM_CLIENT					VARCHAR(100) NOT NULL,
    DS_EMAIL					VARCHAR(200) NOT NULL,
    DS_TELEFONE					VARCHAR(100) NOT NULL,
    DS_CPF						VARCHAR(100) NOT NULL,
    DS_CNH						VARCHAR(100) NOT NULL
=======
    NM_CLIENT					VARCHAR(100) not null,
    DS_EMAIL					VARCHAR(200) not null,
    DS_TELEFONE					VARCHAR(100) not null,
    DS_CPF						VARCHAR(100) not null,
    DS_CNH						VARCHAR(100) not null
>>>>>>> 5afcf58fad13540a412c06bfba8675ff9e69516d
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
	

<<<<<<< HEAD
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
);


CREATE TABLE TB_VEHICLE (
    ID_VEHICLE 		INT PRIMARY KEY AUTO_INCREMENT,
    ID_TYPE 		INT NOT NULL,
    DS_MODEL 		VARCHAR(200) NOT NULL,
    DS_BRAND		VARCHAR(200) NOT NULL,
    NR_YEAR 		INT NOT NULL,
    DS_PLATE 		VARCHAR(50) NOT NULL,
    FOREIGN KEY (ID_TYPE) REFERENCES TB_TYPE_VEHICLE (ID_TYPE)
);

DROP table TB_VEHICLE;














=======
>>>>>>> 5afcf58fad13540a412c06bfba8675ff9e69516d
