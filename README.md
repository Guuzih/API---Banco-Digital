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

## Documentação API

### 1. Listar Todas as Contas Bancárias Cadastradas

Este endpoint permite listar todas as contas bancárias cadastradas.

Endpoint: GET /contas?senha_banco=Cubos123Bank

Parâmetros:

senha_banco (string, obrigatório): A senha de autenticação do banco.
Descrição: Para acessar as informações, é necessário fornecer a senha de autenticação do banco (senha_banco) utilizando o parâmetro de consulta na URL (query params).

### 2. Criar uma Conta Bancária

Este endpoint permite criar uma nova conta bancária.

Endpoint: POST /contas

Parâmetros:

nome (string, obrigatório): Nome do titular da conta.
cpf (string, obrigatório): CPF do titular da conta.
data_nascimento (string, obrigatório): Data de nascimento do titular da conta.
telefone (string, obrigatório): Número de telefone do titular da conta.
email (string, obrigatório): Endereço de email do titular da conta.
senha (string, obrigatório): Senha para acessar a conta.
Descrição: O CPF e o email devem ser únicos, ou seja, não podem estar associados a outra conta bancária cadastrada.

### 3. Atualizar Dados do Usuário da Conta Bancária

Este endpoint permite atualizar os dados do usuário associados a uma conta bancária específica.

Endpoint: PUT /contas/:numeroConta/usuario

Parâmetros:

numeroConta (string, obrigatório): Número da conta bancária a ser atualizada.
nome (string, obrigatório): Novo nome do titular da conta.
cpf (string, obrigatório): Novo CPF do titular da conta.
data_nascimento (string, obrigatório): Nova data de nascimento do titular da conta.
telefone (string, obrigatório): Novo número de telefone do titular da conta.
email (string, obrigatório): Novo endereço de email do titular da conta.
senha (string, obrigatório): Nova senha para acessar a conta.
Descrição: O CPF e o email devem ser únicos, ou seja, não podem estar associados a outra conta bancária cadastrada. Todos os dados precisam ser passados, mesmo aqueles que não serão atualizados. Para esses casos, basta repetir o valor anterior.

### 4. Remover uma Conta Bancária

Este endpoint permite excluir uma conta bancária.

Endpoint: DELETE /contas/:numeroConta

Parâmetros:

numeroConta (string, obrigatório): Número da conta bancária a ser excluída.
Descrição: A conta só pode ser excluída se o saldo for zero.

### 5. Depositar em uma Conta Bancária

Este endpoint permite fazer um depósito em uma conta bancária específica.

Endpoint: POST /transacoes/depositar

Parâmetros:

numero_conta (string, obrigatório): Número da conta bancária de destino do depósito.
valor (number, obrigatório): Valor (em centavos) a ser depositado na conta.
Descrição: O valor deve ser maior que zero.

### 6. Sacar de uma Conta Bancária

Este endpoint permite realizar um saque de uma conta bancária específica.

Endpoint: POST /transacoes/sacar

Parâmetros:

numero_conta (string, obrigatório): Número da conta bancária de onde será realizado o saque.
valor (number, obrigatório): Valor (em centavos) a ser sacado da conta.
senha (string, obrigatório): Senha para autenticar a operação do saque.
Descrição: O valor deve ser maior que zero.

### 7. Transferir Valores entre Contas Bancárias

Este endpoint permite transferir valores entre duas contas bancárias.

Endpoint: POST /transacoes/transferir

Parâmetros:

numero_conta_origem (string, obrigatório): Número da conta bancária de origem da transferência.
numero_conta_destino (string, obrigatório): Número da conta bancária de destino da transferência.
valor (number, obrigatório): Valor (em centavos) a ser transferido entre as contas.
senha (string, obrigatório): Senha para autenticar a operação de transferência.
Descrição: O valor deve ser maior que zero.

### 8. Consultar Saldo da Conta Bancária

Este endpoint permite consultar o saldo de uma conta bancária específica.

Endpoint: GET /contas/saldo

Parâmetros:

numero_conta (string, obrigatório): Número da conta bancária para consultar o saldo.
senha (string, obrigatório): Senha para autenticar a consulta de saldo.

### 9. Emitir Extrato Bancário

Este endpoint permite emitir um extrato bancário para uma conta bancária específica.

Endpoint: GET /contas/extrato

Parâmetros:

numero_conta (string, obrigatório): Número da conta bancária para emitir o extrato.
senha (string, obrigatório): Senha para autenticar a emissão do extrato.
