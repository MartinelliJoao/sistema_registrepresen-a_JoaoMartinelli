CREATE DATABASE IF NOT EXISTS presenca_alunos;
USE presenca_alunos;

CREATE TABLE IF NOT EXISTS alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    matricula VARCHAR(50) NOT NULL UNIQUE,
    turma VARCHAR(50) NOT NULL,
    curso VARCHAR(100) DEFAULT NULL
);

TRUNCATE TABLE alunos;

INSERT INTO alunos (nome, matricula, turma, curso)
VALUES ('Nome do Aluno', 'Matricula123', 'Turma X', 'Curso Y');

INSERT INTO alunos (nome, matricula, turma)
VALUES ('Outro Aluno', 'Matricula456', 'Turma Z');

SELECT * FROM alunos;
