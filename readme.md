-- conceito --

O conceito de middleware refere-se a uma camada de software que age como intermediária entre diferentes componentes 
ou sistemas em uma aplicação, facilitando a comunicação e o gerenciamento de dados entre eles. Em termos mais simples, 
middleware é um conjunto de serviços que conecta, coordena ou facilita a interação entre diferentes partes de um sistema, 
geralmente em um contexto de aplicações distribuídas ou de sistemas complexos.

--------------------------------------------------------------------------------------------------------------------------

-- aplicações e funcionalidades --


Em aplicações Node.js, especialmente aquelas que utilizam frameworks como o Express, os middlewares são essenciais para adicionar funcionalidades e realizar a gestão de requisições e respostas de forma eficiente. Existem diversos tipos de middleware que são usados para atender a uma variedade de necessidades, desde autenticação até manipulação de erros.

1) Middleware de Parsing de Corpo (Body Parsing)
O middleware de parsing é utilizado para processar e transformar os dados enviados no corpo da requisição (por exemplo, JSON ou formulários). No Express, o middleware express.json() e express.urlencoded() são amplamente utilizados.

express.json(): Faz o parsing de dados JSON no corpo da requisição.
express.urlencoded(): Faz o parsing de dados de formulários URL-encoded.

exemplo:

const express = require('express');
const app = express();

" Middleware para parsing de JSON"
app.use(express.json());  --> "Analisa o corpo da requisição como JSON"

"Middleware para parsing de dados de formulários"
app.use(express.urlencoded({ extended: true })); --> "Analisa dados de formulários URL-encoded"


2) Middleware de Autenticação
O middleware de autenticação é utilizado para garantir que a requisição seja feita por um usuário autenticado, geralmente verificando a presença de tokens (como JWT) ou sessões. Esse middleware é vital em APIs RESTful para proteger rotas sensíveis.

exemplo:

function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  
  "Verifique o token (por exemplo, com JWT) e decodifique-o, se o token for válido, passa para o próximo middleware"
  next();
}

app.use(authenticate);

3)Middleware de Autorização
Este middleware é usado para garantir que o usuário autenticado tenha permissões para acessar uma rota específica. Ele verifica, por exemplo, se o usuário tem o papel correto (como "admin", "moderador") para acessar uma funcionalidade ou recurso.

exemplo:

function authorize(roles) {
  return (req, res, next) => {
    const userRole = req.user.role;  "Assumindo que o role foi definido no processo de autenticação"
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}

"Middleware para permitir acesso apenas a administradores"
app.use('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.send('Admin area');
});

4) Middleware de CORS (Cross-Origin Resource Sharing)
O CORS é essencial quando a sua API precisa ser acessada de um domínio diferente do seu servidor. O middleware CORS permite que você configure quais origens podem acessar sua API.

exemplo:

const cors = require('cors');
app.use(cors({
  origin: 'https://algumaAPIaleatoria.com',   "Permite requisições somente de algumaAPIaleatoria.com"
  methods: ['GET', 'POST'],        "Permite apenas métodos GET e POST"
  allowedHeaders: ['content-type'] "Permite cabeçalhos específicos"
}));



5) Middleware de Logging
Esse tipo de middleware é utilizado para registrar as requisições feitas ao servidor, o que pode ser útil para depuração e análise de performance. O pacote morgan é muito popular para logar as requisições HTTP.

exemplo:

const morgan = require('morgan');
app.use(morgan('dev'));  "Usando o formato 'dev' para logs simplificados"


6) Middleware de Redirecionamento
O middleware de redirecionamento pode ser usado para redirecionar o usuário de uma URL para outra. Isso é comum em casos como migração de rotas ou redirecionamento de URLs antigas para novas.

exemplo:

app.use('/old-route', (req, res) => {
  res.redirect(301, '/new-route');  "Redireciona com status 301 (permanente)"
});

--------------------------------------------------------------------------------------------------------------------------
existem varios outros middlewares porem esses sao os mais usados.