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
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o servidor para utilizar HandleBars e o Body-Parser
const handlebars = require('express-handlebars');
const bodyparser = require('body-parser');
// =-=-=-=-=-=-=-=-=-=-=-=

// Implementar entidades do Sequelize
// =-=-=-=-=-=-=-=-=-=-=-=

// Implementar rotas do servidor
app.get("/", function(request, response) {
    response.render("login", {nickname: "Adm"});
});

app.get("/pessoas", function(request, response) {
    response.render("login", {nickname: "Adm"});
});

app.get("/livro", function(request, response) {
    response.render("livro");
});

app.get("/autor", function(request,response){
    response.render("autor");
});
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Body-Parser
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json());
// =-=-=-=-=-=-=-=-=-=-=-=

// Configurar o Handlebars
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// =-=-=-=-=-=-=-=-=-=-=-=

// Inicializar o servidor
app.listen(8088, function () {
    console.log("Servidor rodando na porta 8088!");
});
// =-=-=-=-=-=-=-=-=-=-=-=