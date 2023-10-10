
let {contas} = require('../bancodedados');

const validarConta = (req ,res, next)=>{

    const rota = req.path;
 
        if(rota === "/transacoes/depositar"){

            const {numero_conta, valor} = req.body;
        
            if(!numero_conta ||!valor ){
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
            };

            next()
    
        };

        if(rota === '/transacoes/sacar'){

            const {numero_conta, valor, senha} = req.body;
            const conta = req.query.contaEncontrada;
        
            if(!numero_conta ||!valor|| !senha){
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
            };
    
            if(conta.saldo < valor){
                return res.status(400).json({mensagem: "Saldo insuficiente!"});
            };

            next()
        };
     
        if(rota === "/transacoes/transferir"){
            const {numero_conta_origem, numero_conta_destino, valor,senha} = req.body;  

            if(!numero_conta_origem ||!numero_conta_destino ||!valor || !senha){
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
            };
            next()
        };
    

   
    if (rota === '/contas/' || '/contas/?/usuario') {

        if(req.method === 'DELETE'){
            const conta = req.query.contaEncontrada;

            if(conta.saldo > 0) {
                return res.status(400).json({mensagem : "A conta só pode ser removida se o saldo for zero!"});
            };

            next()

        };
       
        if(req.method === 'POST' || req.method === 'PUT'){
            const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;

            if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios!' });
            };

            next()

        };

        if(req.method === 'GET'){
            const {numero_conta} = req.query;
            if(!numero_conta){
                return res.status(400).json({ mensagem: 'Informar o número da conta!' });
            };

            next()

        };
        
      };

};

const checEmailCPF = (req ,res, next) => {

    const {cpf,email}= req.body;

    if(cpf.length !== 11){
        return res.status(400).json({mensagem: "CPF informado inválido"});
    };

    const cpfAchado = contas.find((contaAtual)=>{
        return contaAtual.usuario.cpf === cpf;
    });

    const emailAchado = contas.find((contaAtual)=>{
        return contaAtual.usuario.email === email;
    });

    if(cpfAchado){
        return res.status(400).json({mensagem: "Já existe uma conta com o cpf informado!"});
    };
    
    if(emailAchado){
        return res.status(400).json({mensagem: "Já existe uma conta com o e-mail informado!"});
    };

    next()

};

const encontrarConta = (req, res, next) => {
   
    const numConta = Number(req.params.numeroConta) || Number(req.query.numero_conta) || req.body.numero_conta || req.body.numero_conta_origem;


    if(req.body.numero_conta_origem){
        const {valor} = req.body
        const contaOrigem = contas.find((conta) =>{
            return conta.numero === numConta;
        }); 

        const contaDestino = contas.find((conta) =>{
            return conta.numero === req.body.numero_conta_destino;
        });

        if(contaOrigem.saldo < valor){
            return res.status(400).json({mensagem: "Saldo insuficiente!"});
        };

    req.query.contaOrigem = contaOrigem;
    req.query.contaDestino = contaDestino;

        next()

    };

    const conta = contas.find((conta) =>{
        return conta.numero === numConta;
    });
 
    if(!conta){
        return res.status(400).json({mensagem : "Conta não existente"});
    };



    req.query.contaEncontrada = conta;
    
    next()

};

const valorNegativo = (req, res, next) => {
   
    const {valor} = req.body
    
    if(valor <= 0){
        return res.status(400).json({mensagem: "Valor inválido!"});
    };

    next()

};

module.exports = {
    validarConta,
    checEmailCPF,
    encontrarConta,
    valorNegativo
    };