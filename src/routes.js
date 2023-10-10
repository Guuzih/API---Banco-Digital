const express = require('express');

const { listarContaBancaria, criarContaBancaria, atualizarDados, deletarConta, mostrarSaldo, mostrarExtrato} = require('./controller/contas');
const { depositar, saque, transferir } = require('./controller/transacaoBancaria');
const { validarSenhaBanco, validarSenhaConta } = require('./Middleware/validacaoSenha');
const { validarConta, checEmailCPF, encontrarConta, valorNegativo } = require('./Middleware/validacaoConta');

const routes = express.Router();

//Conta

routes.get('/contas/' ,validarSenhaBanco ,listarContaBancaria);

routes.post('/contas/' ,validarConta ,checEmailCPF ,criarContaBancaria);

routes.put('/contas/:numeroConta/usuario' ,encontrarConta ,validarConta, checEmailCPF , atualizarDados);

routes.delete('/contas/:numeroConta/' ,encontrarConta, validarConta ,deletarConta);

routes.get('/contas/saldo/' ,encontrarConta ,validarConta ,validarSenhaConta ,mostrarSaldo);

routes.get('/contas/extrato/' ,encontrarConta,validarSenhaConta ,mostrarExtrato);


//Transações

routes.post('/transacoes/depositar' ,encontrarConta ,validarConta ,valorNegativo ,depositar);

routes.post('/transacoes/sacar' ,encontrarConta ,validarConta, validarSenhaConta ,valorNegativo ,saque);

routes.post('/transacoes/transferir' ,encontrarConta ,validarConta ,validarSenhaConta ,valorNegativo ,transferir);

module.exports = { routes };