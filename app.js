// Inicial o servidor
const express = require('express');
const app = express();
// =-=-=-=-=-=-=-=-=-=-=-=

// Utilizar o módulo de Path para construir diretórios
const path = require('path');
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar os diretórios lógicos da aplicação
app.use(express.static('public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, './models')));
app.use('/js', express.static(path.join(__dirname, './js')));
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o servidor para utilizar HandleBars e o Body-Parser
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
// =-=-=-=-=-=-=-=-=-=-=-=

// Implementar entidades do Sequelize
const Usuario = require('./models/Usuario');
const Livro = require('./models/Livro');
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Body-Parser
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
// =-=-=-=-=-=-=-=-=-=-=-=

// Implementar rotas do servidor
app.get("/", function (request, response) {
    response.render("login", { nickname: "Adm" });
});

app.get("/usuarios", function (request, response) {
    // teste
    Usuario.findAll().then(
        function (usuarios) {
            response.render("usuario", { usuarios: usuarios })
        }
    );
});

app.get("/pessoas", function (request, response) {
    response.render("login", { nickname: "Adm" });
});

app.get("/locacao", function (request, response) {
    response.render("locacao");
});

app.get("/livro", function(request, response) {
    response.render("livro");
});

app.get("/autor", function (request, response) {
    response.render("autor");
});

app.get("/gridLivros", function (request, response) {

    Livro.findAll().then(
        function (livros) {
            response.render("gridLivros", { livros: livros })
        }
        )
});

    app.post('/add', function (request, response) {
        Livro.create(
        {
            titulo: request.body.titulo,
            editora: request.body.editora,
            categoria: request.body.categoria,
            autor: request.body.autor,
            dataLancamento: request.body.dataLancamento,
            paginas: request.body.paginas,
            classificacao: request.body.classificacao,
        } 
        ).then(
            function() {
                response.redirect('/gridLivros');
            }
        ).catch(
             function(erro) {
                response.send('Falha ao cadastrar novo livro. Erro ' + erro);
             }
        )
    });

app.get("/home", function (request, response) {
    response.render("home");
});
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Handlebars
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// =-=-=-=-=-=-=-=-=-=-=-=

// Inicializar o servidor
app.listen(8088, function () {
    console.log("Servidor rodando na porta 8088!");
});
// =-=-=-=-=-=-=-=-=-=-=-=