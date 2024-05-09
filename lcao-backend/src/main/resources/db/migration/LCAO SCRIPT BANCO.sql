DROP DATABASE IF EXISTS lcaoBanco;
CREATE DATABASE IF NOT EXISTS lcaoBanco DEFAULT CHARACTER SET utf8;
USE lcaoBanco;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_usuario` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `senha` VARCHAR(40) NOT NULL
) ENGINE = InnoDB;

-- Tabela de Lembretes
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_lembrete` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `descricao` VARCHAR(255) NOT NULL,
    `data` VARCHAR(255) NOT NULL,
    `prioridade` VARCHAR(15) NOT NULL,
    `modelo` VARCHAR(40) NOT NULL,
    `usuario_id` INT,
    PRIMARY KEY(id),
    FOREIGN KEY (usuario_id) REFERENCES tabela_usuario(id)
) ENGINE = InnoDB;

-- Tabela de Anotações
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_anotacoes` (
    `id` INT AUTO_INCREMENT,
    `conteudo` TEXT,
    `usuario_id` INT,
    PRIMARY KEY(id),
    FOREIGN KEY (usuario_id) REFERENCES tabela_usuario(id)
) ENGINE = InnoDB;

select * from tabela_anotacoes;

SELECT * FROM tabela_lembrete;

SELECT * FROM tabela_usuario;

-- truncate tabela_lembrete;
-- truncate tabela_usuario;
-- truncate tabela_anotacoes;
