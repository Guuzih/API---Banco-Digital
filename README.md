# API de Banco Digital da Cubos

Bem-vindo à API do Desafio de Conclusão do Segundo Módulo do curso Cubos Academy, dedicada a um Banco Virtual! Esta API foi desenvolvida como parte do nosso aprendizado no segundo módulo, e estamos empolgados em compartilhar as funcionalidades e recursos que implementamos ao longo deste desafio para criar uma experiência bancária virtual.

## Sobre o Desafio

Neste desafio, fomos desafiados a aplicar o conhecimento adquirido durante o segundo módulo do curso Cubos Academy em um projeto prático relacionado a um Banco Virtual. Através deste projeto, pudemos aprimorar nossas habilidades em desenvolvimento de APIs, manipulação de dados financeiros e muito mais. Esta API é o resultado do nosso esforço e aprendizado ao longo do módulo, proporcionando uma plataforma para simular transações financeiras em um ambiente virtual.

## Stacks utilizadas

**Back-end:**

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![NodeJs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![insomnia](https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white)

## Instalando Projeto

### Clone o projeto

```bash
  git clone git@github.com:Guuzih/API---Banco-Digital.git
```

### Instale as dependências

```bash
  npm install
```

### Inicie o servidor

```bash
  npm run dev
```

## Abrir a API

Utilizando o Insomnia, importe o arquivo `rotas_insomnia` disponível junto com o projeto.

![insomnia](https://i.imgur.com/2cgKebH.gif)

# Documentação API

## Índice

- [Listar Contas Bancárias](#listar-contas-bancárias)
- [Criar Conta Bancária](#criar-conta-bancária)
- [Atualizar Usuário da Conta Bancária](#atualizar-usuário-da-conta-bancária)
- [Excluir Conta Bancária](#excluir-conta-bancária)
- [Depositar](#depositar)
- [Sacar](#sacar)
- [Transferir](#transferir)
- [Consultar Saldo da Conta Bancária](#consultar-saldo-da-conta-bancária)
- [Emitir Extrato Bancário](#emitir-extrato-bancário)

## Listar Contas Bancárias

![listarconta](https://i.imgur.com/G88TkRm.gif)

**Endpoint:** `GET /contas?senha_banco=Cubos123Bank`

Este endpoint lista todas as contas bancárias existentes.

- **Parâmetros:**
  - `senha_banco` (string, obrigatório): Senha de autenticação do banco.

## Criar Conta Bancária

![criarconta](https://i.imgur.com/aUfMMTa.gif)

**Endpoint:** `POST /contas`

Este endpoint cria uma nova conta bancária.

- **Parâmetros no Corpo (Body):**
  - `nome` (string, obrigatório): Nome do titular da conta.
  - `cpf` (string, obrigatório): CPF do titular da conta.
  - `data_nascimento` (string, obrigatório): Data de nascimento do titular da conta.
  - `telefone` (string, obrigatório): Número de telefone do titular da conta.
  - `email` (string, obrigatório): Endereço de email do titular da conta.
  - `senha` (string, obrigatório): Senha para acessar a conta.

## Atualizar Usuário da Conta Bancária

![atualizar](https://i.imgur.com/NgxiMnV.gif)

**Endpoint:** `PUT /contas/:numeroConta/usuario`

Este endpoint atualiza os dados do usuário associados a uma conta bancária específica.

- **Parâmetros:**

  - `numeroConta` (string, obrigatório): Número da conta bancária a ser atualizada.

- **Parâmetros no Corpo (Body):**
  - `nome` (string, obrigatório): Novo nome do titular da conta.
  - `cpf` (string, obrigatório): Novo CPF do titular da conta.
  - `data_nascimento` (string, obrigatório): Nova data de nascimento do titular da conta.
  - `telefone` (string, obrigatório): Novo número de telefone do titular da conta.
  - `email` (string, obrigatório): Novo endereço de email do titular da conta.
  - `senha` (string, obrigatório): Nova senha para acessar a conta.

## Excluir Conta Bancária

![excluir](https://i.imgur.com/kEs4J6O.gif)

**Endpoint:** `DELETE /contas/:numeroConta`

Este endpoint exclui uma conta bancária existente.

- **Parâmetros:**
  - `numeroConta` (string, obrigatório): Número da conta bancária a ser excluída.

## Depositar

![deposito](https://i.imgur.com/PkmGikY.gif)


**Endpoint:** `POST /transacoes/depositar`

Este endpoint realiza um depósito em uma conta bancária específica.

- **Parâmetros no Corpo (Body):**
  - `numero_conta` (string, obrigatório): Número da conta bancária de destino do depósito.
  - `valor` (number, obrigatório): Valor (em centavos) a ser depositado na conta.

## Sacar

![sacar](https://i.imgur.com/R1iZfZr.gif)

**Endpoint:** `POST /transacoes/sacar`

Este endpoint realiza o saque de um valor em uma determinada conta bancária.

- **Parâmetros no Corpo (Body):**
  - `numero_conta` (string, obrigatório): Número da conta bancária de onde será realizado o saque.
  - `valor` (number, obrigatório): Valor (em centavos) a ser sacado da conta.
  - `senha` (string, obrigatório): Senha para autenticar a operação do saque.

## Transferir

![transferir](https://i.imgur.com/Se8zWbj.gif)

**Endpoint:** `POST /transacoes/transferir`

Este endpoint permite a transferência de recursos (dinheiro) de uma conta bancária para outra.

- **Parâmetros no Corpo (Body):**
  - `numero_conta_origem` (string, obrigatório): Número da conta bancária de origem da transferência.
  - `numero_conta_destino` (string, obrigatório): Número da conta bancária de destino da transferência.
  - `valor` (number, obrigatório): Valor (em centavos) a ser transferido entre as contas.
  - `senha` (string, obrigatório): Senha para autenticar a operação de transferência.

## Consultar Saldo da Conta Bancária

![consultarsaldo](https://i.imgur.com/b2Oiyq3.gif)

**Endpoint:** `GET /contas/saldo`

Este endpoint retorna o saldo de uma conta bancária específica.

- **Parâmetros de Consulta (Query Params):**
  - `numero_conta` (string, obrigatório): Número da conta bancária para consultar o saldo.
  - `senha` (string, obrigatório): Senha para autenticar a consulta de saldo.

## Emitir Extrato Bancário

![extrato](https://i.imgur.com/uPeIhlR.gif)

**Endpoint:** `GET /contas/extrato`

Este endpoint lista as transações realizadas de uma conta específica.

- **Parâmetros de Consulta (Query Params):**
  - `numero_conta` (string, obrigatório): Número da conta bancária para emitir o extrato.
  - `senha` (string, obrigatório): Senha para autenticar a emissão do extrato.

