const sequelie = require("sequelize");
const conn = require("../config/connection");

const Login = conn.define("login", {
  nome: {
    type: sequelie.STRING,
    allowNull: false,
  },
  perfil: {
    type: sequelie.STRING,
    allowNull: false,
  },
  cpf: {
    type: sequelie.STRING,
    allowNull: false,
  },
  dtNascimento: {
    type: sequelie.STRING,
    allowNull: false,
  },
  rg: {
    type: sequelie.STRING,
    allowNull: false,
  },
  email: {
    type: sequelie.STRING,
    allowNull: false,
  },
  password: {
    type: sequelie.STRING,
    allowNull: false,
  },
});

module.exports = Login;
