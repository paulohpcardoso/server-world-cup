CREATE DATABASE copa_do_mundo;

USE copa_do_mundo;

CREATE TABLE selecao (  
    id VARCHAR(3), 
    nome VARCHAR(50) NOT NULL,
    `grupo` VARCHAR(1) NOT NULL,
    `created_at` TIMESTAMP default current_timestamp,
    pontos INT NOT NULL,
    gols_feitos INT NOT NULL,
    gols_tomados INT NOT NULL,
    cartao_am INT NOT NULL,
    cartao_ve INT NOT NULL,
    vitorias INT NOT NULL,
    empates INT NOT NULL,
    derrotas INT NOT NULL,
    quartas BOOLEAN NOT NULL default 0,
    semi BOOLEAN NOT NULL default 0,
    final BOOLEAN NOT NULL default 0, 
    PRIMARY KEY (`id`)
);

CREATE TABLE jogador (  
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL, 
    selecao VARCHAR(3) NOT NULL, 
    posicao VARCHAR(2) NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    gols INT NOT NULL, 
    assistencias INT NOT NULL, 
    faltas INT NOT NULL, 
    impedimentos INT NOT NULL, 
    cartao_am INT NOT NULL, 
    cartao_ve INT NOT NULL, 
    defesas INT NOT NULL,  
    PRIMARY KEY (`id`),
    FOREIGN KEY (selecao) REFERENCES selecao(id)
);

CREATE TABLE estadio (  
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL, 
    city VARCHAR(30) NOT NULL, 
    zipcode VARCHAR(10) NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    capacidade INT NOT NULL, 
    PRIMARY KEY (`id`)
);

CREATE TABLE partida (  
    id INT NOT NULL AUTO_INCREMENT,
    sel_1 VARCHAR(3) NOT NULL, 
    sel_2 VARCHAR(3) NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    gols_sel_1 INT NOT NULL, 
    gols_sel_2 INT NOT NULL,
    estadio INT NOT NULL, 
    grupo VARCHAR(1),
    quartas BOOLEAN NOT NULL default 0,
    semi BOOLEAN NOT NULL default 0,
    final BOOLEAN NOT NULL default 0, 
    PRIMARY KEY (`id`),
    FOREIGN KEY (sel_1) REFERENCES selecao(id),
    FOREIGN KEY (sel_2) REFERENCES selecao(id),
    FOREIGN KEY (estadio) REFERENCES estadio(id),
);

CREATE TABLE eventos (  
    id INT NOT NULL AUTO_INCREMENT,
    partida INT NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    tipo VARCHAR(20) NOT NULL, 
    tempo INT NOT NULL,
    jogador INT NOT NULL, 
    PRIMARY KEY (`id`),
    FOREIGN KEY (partida) REFERENCES partida(id),
    FOREIGN KEY (selecao) REFERENCES selecao(id),
    FOREIGN KEY (jogador) REFERENCES jogador(id),
);

CREATE TABLE estatisticas (  
    id INT NOT NULL AUTO_INCREMENT,
    partida INT NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    chutes_sel1 INT NOT NULL,
    chutes_gol_sel1 INT NOT NULL,
    posse_sel1 INT NOT NULL,
    passes_sel1 INT NOT NULL,
    passes_errados_sel1 INT NOT NULL,
    faltas_sel1 INT NOT NULL,
    cartao_am_sel1 INT NOT NULL,
    cartao_ve_sel1 INT NOT NULL,
    impedimentos_sel1 INT NOT NULL,
    escanteios_sel1 INT NOT NULL,
    chutes_sel2 INT NOT NULL,
    chutes_gol_sel2 INT NOT NULL,
    posse_sel2 INT NOT NULL,
    passes_sel2 INT NOT NULL,
    passes_errados_sel2 INT NOT NULL,
    faltas_sel2 INT NOT NULL,
    cartao_am_sel2 INT NOT NULL,
    cartao_ve_sel2 INT NOT NULL,
    impedimentos_sel2 INT NOT NULL,
    escanteios_sel2 INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (partida) REFERENCES partida(id),
);

CREATE TABLE user (  
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL, 
    pass VARCHAR(30) NOT NULL, 
    `created_at` TIMESTAMP default current_timestamp, 
    PRIMARY KEY (`id`)
);

INSERT INTO user (username, password) values("admin", "admin");