const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: Number,
    required: true
  },
  telefone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  logradouro: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
});

const ClientModel = mongoose.model('clientes', schema,'clientes');

module.exports = ClientModel;