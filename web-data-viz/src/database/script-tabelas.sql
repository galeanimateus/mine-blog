CREATE DATABASE mine_blog;

USE mine_blog;

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	dt_nascimento DATE,
	email VARCHAR(45),
	senha VARCHAR(45)
);
CREATE TABLE personalidade (
	id_personalidade INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	descricao VARCHAR(250)
);
CREATE TABLE quiz(
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
	qtdA CHAR(10),
	qtdB CHAR(10),
	qtdC CHAR(10),
	qtdD CHAR(10),
	qtdE CHAR(10),
	qtdF CHAR(10),
    id_usuario INT,
	id_personalidade INT,
    CONSTRAINT fkUsuarioConst 
		FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
	CONSTRAINT fkPersonalidadeConst 
		FOREIGN KEY (id_personalidade) REFERENCES personalidade (id_personalidade)
);

INSERT INTO personalidade (nome, descricao) VALUES
('O Construtor', 'Focado na estética. Passa horas projetando mansões, castelos, vilas ou recriando cenários.'),
('O Redstone Engineer', 'Especialista em lógica, circuitos e automação. Cria portas automáticas, fazendas automáticas e até computadores dentro do jogo.'),
('O Aventureiro', 'Foca na exploração. Adora explorar templos, derrotar bosses (como o Ender Dragon), invadir mansões e jogar em servidores de PvP (jogador contra jogador).'),
('O Speedrunner', 'Tenta terminar o jogo o mais rápido possível, do início até matar o dragão, utilizando técnicas e rotas calculadas.'),
('O Acumulador', 'Coleciona todos os itens possíveis. Possui baús e mais baús organizados (ou completamente caóticos) repletos de recursos.'),
('O Default', 'Jogador mais casual ou "equilibrado", que não foca ao extremo em uma única coisa, mas aproveita o jogo no seu próprio ritmo, fazendo o básico que funciona.');

