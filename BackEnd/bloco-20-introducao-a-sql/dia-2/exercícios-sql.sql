SELECT * FROM Faculdade.biblioteca;
-- 1. Eu quero somente os nomes dos livros cadastrados na biblioteca;
SELECT nome FROM Faculdade.biblioteca;
-- 2. Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
SELECT COUNT(nome) FROM Faculdade.biblioteca;
-- 3. Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'A linugagem Javascript';
SELECT * FROM Faculdade.biblioteca LIMIT 2 OFFSET 2
-- 4. Quero os livros mais recentes primeiro, e também em ordem alfabética;
SELECT * FROM Faculdade.biblioteca ORDER BY `ano` DESC, `nome` ASC;
-- 5. Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
SELECT * FROM Faculdade.biblioteca ORDER BY `número de cópias` DESC LIMIT 1;
-- 6. Eu quero criar uma lista com os livros em ordem decrescente de quantidade. Como poderia encontrar isso?
SELECT * FROM Faculdade.biblioteca ORDER BY `número de cópias` DESC; 