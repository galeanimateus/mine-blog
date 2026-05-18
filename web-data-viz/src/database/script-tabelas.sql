CREATE DATABASE mine_blog;

USE mine_blog;

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	dt_nascimento DATE,
	email VARCHAR(45),
	senha VARCHAR(45)
);

CREATE TABLE quiz(
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
	qtd_acerto INT,
	nivel VARCHAR(45),
    id_usuario INT,
    CONSTRAINT fkUsuarioConst 
		FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);
