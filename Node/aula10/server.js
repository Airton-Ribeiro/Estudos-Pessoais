const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path')

app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

// // /profiles/12345 ?
// //campanha=googleads &
// //nome_campanha=seila

// app.get('/', (req, res) => {
//     res.send(`<form action"/" method="POST">
//     Nome do cliente: <input type="text" name="nome">
//     <button>Enviar Form</button>
//     `);
// });

// app.get('/testes/:idUsuarios?', (req, res) => { //interrogação faz ser opcional! e para adicionar parametros usamos /:
//     // /profile/3
//     // /profiles/?chave1=valor&chave2=valor2&chave3=valor3
//     //
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.idUsuarios);
// })

// app.post('/', (req, res) =>{ //o metodo post está do form method post.
//     console.log(req.body)
//     res.send(`O que você me enviou foi: ${req.body.nome}`);//esse nome vem do name do forms
// });



app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
} );