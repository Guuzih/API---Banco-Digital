let {contas ,numConta,saques,depositos,transferencias} = require('../bancodedados');

const listarContaBancaria = (req, res ) => {
    return res.status(200).json(contas);
};

const criarContaBancaria = (req, res) => {
    const {nome,cpf,data_nascimento, telefone, email,senha} = req.body;

    const addConta =  {
        numero: numConta++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };

    contas.push(addConta)

    res.status(201).json({mensagem: "Conta Criada"});

};

const atualizarDados = (req, res) => {

    const {nome,cpf,data_nascimento, telefone, email,senha}= req.body;
    const conta = req.query.contaEncontrada;
    

    conta.usuario.nome = nome;
    conta.usuario.cpf = cpf;    
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.senha = senha;
    conta.usuario.email = email;

    return res.status(200).json({mensagem: 'Usuario atualizado!'})

};

const deletarConta = (req, res) => {

    const {numeroConta} = req.params;

    contas = contas.filter((conta)=>{

        return conta.numero !== Number(numeroConta); 
        
    });

    return res.status(200).json({mensagem:"Conta removida!"});

};

const mostrarSaldo = (req, res) => {

    const conta = req.query.contaEncontrada;

    res.status(200).json({mensagem: conta.saldo});

};

const mostrarExtrato = (req,res) => {
    
    const {numero_conta} = req.query

    const depositosFeito = depositos.filter( (dep) =>{ 
        return dep.numero_conta === Number(numero_conta);
    });

    const transferenciasEnviadas = transferencias.filter( (trans) =>{ 
        return trans.numero_conta_origem === Number(numero_conta);
    });

    const transferenciasRecebidas = transferencias.filter( (trans) =>{ 
        return trans.numero_conta_destino === Number(numero_conta);
    });

    const saquesFeitos = saques.filter( (saq) =>{ 
        return saq.numero_conta === Number(numero_conta);
    });

    extrato = {
        depositos : depositosFeito,
        saques: saquesFeitos,
        transferenciasEnviadas,
        transferenciasRecebidas
    };

    res.status(200).json({mensagem: extrato});

};

module.exports = {
    listarContaBancaria,
    criarContaBancaria,
    atualizarDados,
    deletarConta,
    mostrarSaldo,
    mostrarExtrato
};