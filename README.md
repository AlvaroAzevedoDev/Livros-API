# Livros-API

Com esse projeto nós podemos listar, achar, cadastrar, alterar e excluir um livro em um banco de dados.

# Executando o projeto

**Inicialização do Projeto:**

- Crie uma pasta para o projeto.
- Use o comando npm init para criar o arquivo package.json.
- Instale as dependências com npm install express nodemon.

**Estrutura de Pastas:**

- Organize o projeto com pastas como src, controladores, rotas e modelos.

**Configuração do Express:**

- No arquivo index.js, configure o Express e Nodemon.
- Defina uma porta para o servidor.

**Modelo de Livro:**

- Crie um modelo para representar a estrutura de um livro.
- Pode ser uma classe com propriedades como ID, título e autor.

**Operações Básicas:**

- Listar Livros:
- Crie uma rota e um controlador para listar os livros.
- O controlador retorna uma lista de livros.

**Buscar Livro por ID:**

- Adicione uma rota e um controlador para buscar um livro por ID.
- O controlador recebe o ID como parâmetro e retorna o livro correspondente.

**Cadastrar Livro:**

- Implemente uma rota e um controlador para cadastrar um novo livro.
- O controlador recebe dados do novo livro, cria uma instância e a adiciona à lista.

**Alterar Livro por ID:**

- Adicione uma rota e um controlador para alterar os detalhes de um livro existente.
- O controlador recebe o ID do livro a ser alterado e os novos dados.

**Excluir Livro por ID:**

- Crie uma rota e um controlador para excluir um livro por ID.
- O controlador recebe o ID do livro a ser excluído e remove-o da lista.

![imagem](https://github.com/AlvaroAzevedoDev/Livros-API/blob/main/imgs/Imagem_3.png)


**Execução e Teste:**

- Execute o servidor usando Nodemon.
- Certifique-se de que a API responde corretamente às requisições de listar, buscar, cadastrar e alterar livros.


![imagem](https://github.com/AlvaroAzevedoDev/Livros-API/blob/main/imgs/Imagem_1.png)
