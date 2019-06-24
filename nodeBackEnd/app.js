const express = require('express');
const PORT = 3000;
const app = express();
app.set("json spaces", 4);

const index = require('./routes/index');
const filmes = require('./routes/filmes');

app.use('/', index);
app.use('/filmes', filmes);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// app.get("/", (req, res) => res.json({status: "Nodejs backend"}));

//app.listen(PORT, () => console.log("escutando na porta " + PORT));

// app.get("/filmes", (req, res) => {
//     res.json(
//         [
//             {'codigo': 1, 'nomeFilme': 'Avengers - End Game', 'genero': 'Ação/Aventura', 'anoLancamento': 2019},
//             {'codigo': 2, 'nomeFilme': 'Pretty woman', 'genero': 'Romance', 'anoLancamento': 1990}
//         ]
//     );
// });

app.listen(PORT, () => console.log("Escutando na porta " + PORT));