const livros = require('../data/datalivros');

let proximoId = 3;

const listarLivros = (req, res) => res.json(livros);

const acharLivro = (req, res) => {
  const { id } = req.params;

  const livro = livros.find(livro => {
    return livro.id === Number(id);
  });

  if (isNaN(id)) {
    return res.status(400).json({
      mensagem: 'O valor do parâmetro ID da URL não é um número válido. ',
    });
  }

  if (!livro) {
    return res.status(404).json({
      mensagem: 'Não existe livro para o ID informado. ',
    });
  }

  return res.json(livro);
};

const cadastrarLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  if (!titulo) {
    return res.status(400).json({ mensagem: 'O campo titulo é obrigatório' });
  }

  if (!autor) {
    return res.status(400).json({ mensagem: 'O campo autor é obrigatório' });
  }

  if (!ano) {
    return res.status(400).json({ mensagem: 'O campo ano é obrigatório' });
  }

  if (!numPaginas) {
    return res
      .status(400)
      .json({ mensagem: 'O campo numPaginas é obrigatório' });
  }

  const novoLivro = {
    id: proximoId,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  livros.push(novoLivro);
  proximoId++;

  return res.status(201).json(novoLivro);
};

const alterarLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  if (!titulo) {
    return res.status(400).json({ mensagem: 'O campo titulo é obrigatório' });
  }

  if (!autor) {
    return res.status(400).json({ mensagem: 'O campo autor é obrigatório' });
  }

  if (!ano) {
    return res.status(400).json({ mensagem: 'O campo ano é obrigatório' });
  }

  if (!numPaginas) {
    return res
      .status(400)
      .json({ mensagem: 'O campo numPaginas é obrigatório' });
  }

  const livroExiste = livros.find(livro => {
    return livro.id === Number(id);
  });

  if (!livroExiste) {
    return res.status(404).json({
      mensagem: 'Não existe livro a ser substituído para o ID informado. ',
    });
  }

  livroExiste.titulo = titulo;
  livroExiste.autor = autor;
  livroExiste.ano = ano;
  livroExiste.numPaginas = numPaginas;

  return res.json({ mensagem: 'O livro foi substituído' });
};

const alterarParteDoLivro = (req, res) => {
  const { id } = req.params;
  const { titulo, autor, ano, numPaginas } = req.body;

  const livroExiste = livros.find(livro => {
    return livro.id === Number(id);
  });

  if (!livroExiste) {
    return res.status(404).json({
      mensagem: 'Não existe livro a ser substituído para o ID informado. ',
    });
  }

  if (titulo) {
    livroExiste.titulo = titulo;
  }

  if (autor) {
    livroExiste.autor = autor;
  }

  if (ano) {
    livroExiste.ano = ano;
  }

  if (numPaginas) {
    livroExiste.numPaginas = numPaginas;
  }

  return res.json({ mensagem: 'O livro alterado' });
};

const excluirLivro = (req, res) => {
  const { id } = req.params;

  const indiceLivro = livros.findIndex(livro => {
    return livro.id === Number(id);
  });

  if (indiceLivro < 0) {
    return res.status(404).json({
      mensagem: 'Não existe livro a ser removido para o ID informado. ',
    });
  }

  livros.splice(indiceLivro, 1);

  return res.json({ mensagem: 'Livro excluído.' });
};
module.exports = {
  listarLivros,
  acharLivro,
  cadastrarLivro,
  alterarLivro,
  alterarParteDoLivro,
  excluirLivro,
};
