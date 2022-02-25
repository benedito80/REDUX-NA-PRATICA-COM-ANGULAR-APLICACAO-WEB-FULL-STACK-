require("dotenv").config();
require("./config/config");
require("./config/db");


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usuario = require("./routes/Usuario.router");

// middleware 
app.use(bodyParser.json());
app.use(cors());

//ROTA UPLOAD DE IMAGENS
//app.use(require("./routes/Posts.Router"));

app.use("/usuarios", usuario);

//fazendo com que as imagem(estaticas) sejam acessadas atraves das url no navegador
//app.use("/files", express.static(path.resolve(__dirname, "temp", "uploads")));

// start server
app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta : ${process.env.PORT}`)
);
