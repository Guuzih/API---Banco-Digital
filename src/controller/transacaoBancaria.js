let {depositos, saques, transferencias} = require('../bancodedados');
const { format } = require('date-fns');



const depositar = (req, res) => {

    const {numero_conta, valor} = req.body;
    const conta = req.query.contaEncontrada;

    conta.saldo += valor;

    const deposito = {
        data: format(new Date(),"dd-MM-yyyy kk:mm:ss"),
        numero_conta,
        valor
    };

    depositos.push(deposito);

    res.status(201).json({mensagem: "Deposito realizado!"})

};

const saque = (req, res) => {
   
    const {numero_conta, valor} = req.body;
    const conta = req.query.contaEncontrada;


   conta.saldo -= valor;

   const saque ={
    data: format(new Date(),"dd-MM-yyyy kk:mm:ss"),
    numero_conta,
    valor
    };

    saques.push(saque);

    res.status(201).json({mensagem: "Saque realizado!"});

};

const transferir = (req, res) => {

        const {numero_conta_origem, numero_conta_destino, valor} = req.body;  

        const {contaOrigem ,contaDestino} = req.query;

        contaOrigem.saldo -= valor;
        contaDestino.saldo += valor;

        const transferencia ={
            data: format(new Date(),"dd-MM-yyyy kk:mm:ss"),
            numero_conta_origem,
	        numero_conta_destino,
	        valor,
            };
        
        transferencias.push(transferencia);
    
        res.status(201).json({mensagem: "Transferência realizado!"});

};

module.exports = {
    depositar,
    saque,
    transferir,
};


