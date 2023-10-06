const express = require('express');
const livros = require('./controladores/livros');

const rotas = express();

rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.acharLivro);
rotas.post('/livros', livros.cadastrarLivro);
rotas.put('/livros/:id', livros.alterarLivro);
rotas.patch('/livros/:id', livros.alterarParteDoLivro);
rotas.delete('/livros/:id', livros.excluirLivro);

module.exports = rotas;
