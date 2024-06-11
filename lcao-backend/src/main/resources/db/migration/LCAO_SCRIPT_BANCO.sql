DROP DATABASE IF EXISTS lcaoBanco;
CREATE DATABASE IF NOT EXISTS lcaoBanco DEFAULT CHARACTER SET utf8;
USE lcaoBanco;

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_usuario` (
    `id` VARCHAR(36) UNIQUE NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `senha` VARCHAR(80) NOT NULL,
    PRIMARY KEY(id)
) ENGINE = InnoDB;

-- Tabela de Lembretes
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_lembrete` (
    `id` VARCHAR(36) UNIQUE NOT NULL,
    `titulo` VARCHAR(255) NOT NULL,
    `descricao` TEXT,
    `data` TIMESTAMP NOT NULL,
    `prioridade` VARCHAR(15) NOT NULL,
    `modelo` VARCHAR(40) NOT NULL,
    `usuario_id` VARCHAR(36),
    PRIMARY KEY(id),
    FOREIGN KEY (usuario_id) REFERENCES tabela_usuario(id)
) ENGINE = InnoDB;

-- Tabela de Anotações
CREATE TABLE IF NOT EXISTS lcaoBanco.`tabela_anotacoes` (
    `id` VARCHAR(36) UNIQUE NOT NULL,
    `conteudo` TEXT,
    `modelo` VARCHAR(40) NOT NULL,
    `usuario_id` VARCHAR(36),
    PRIMARY KEY(id),
    FOREIGN KEY (usuario_id) REFERENCES tabela_usuario(id)
) ENGINE = InnoDB;

select * from tabela_anotacoes;

SELECT * FROM tabela_lembrete;

SELECT * FROM tabela_usuario;

-- truncate tabela_lembrete;
-- truncate tabela_usuario;
-- truncate tabela_anotacoes;
