const express = require("express");
const app = express();
const conn = require("./config/connection");
const session = require("express-session");
const loginController = require('./controller/Login')
app.set("view engine", "ejs"); // Utilizar a engine ejs

//Utilizar cookie e Tempo da Sessão expirar Max: tempo
app.use(
  session({
    secret: "salada com tomate",
    cookie: { max: 30000 },
  })
);
app.use(express.static("public")); // utilizar arquivos staticos
// bodyparser
app.use(express.urlencoded({ extended: true }));

conn
  .authenticate()
  .then(() => {
    console.log("Servidor Conectador com Sucesso");
  })
  .catch((err) => {
    console.log(err);
  });

//user controller
app.use('/', loginController)

// HomePage
app.get('/',(req,res)=>{

res.send("deu certo")
})

//Começar a iniciar as rotas
app.listen(8080,()=>{
    console.log("Server On");
})