const {banco} = require('../bancodedados');
let {contas} = require('../bancodedados');




const validarSenhaBanco = (req, res, next) => {

    const senhaBanco = req.query.senha_banco;

    if (senhaBanco === banco.senha) {
      next();
    } else {
      res.status(401).json({ mensagem: 'A senha do banco informada é inválida!' });
    };

};

const validarSenhaConta = (req, res, next) => {
  
    const senhaDigitada = req.body.senha || req.query.senha;
    const numDigitada = req.body.numero_conta || req.body.numero_conta_origem ||Number(req.query.numero_conta);


  const contaOrigem = contas.find((conta) =>{
    return conta.numero === numDigitada;
  });

  if(contaOrigem.usuario.senha !== senhaDigitada)
      return res.status(401).json({mensagem: "Senha informada inválida!"});

  next();
  
};

module.exports = {
    validarSenhaBanco,
    validarSenhaConta
};