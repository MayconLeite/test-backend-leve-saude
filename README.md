# 🩺 Leve Saúde - Agenda Médica

Este projeto é uma API Serverless para gerenciamento de **agendas médicas** e **agendamentos de consultas**, desenvolvido com foco em boas práticas, testes automatizados e arquitetura escalável.

---

## 🚀 Tecnologias Utilizadas

| Tecnologia       | Descrição                                      |
|------------------|------------------------------------------------|
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178c6?logo=typescript&logoColor=white) | Tipagem estática e robusta |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) | Plataforma JavaScript Backend |
| ![Serverless](https://img.shields.io/badge/-Serverless-FD5750?logo=serverless&logoColor=white) | Framework para aplicações Serverless |
| ![AWS Lambda](https://img.shields.io/badge/-AWS%20Lambda-FF9900?logo=amazon-aws&logoColor=white) | Execução de código em nuvem sem servidores |
| ![Jest](https://img.shields.io/badge/-Jest-C21325?logo=jest&logoColor=white) | Framework de testes |
| ![tsyringe](https://img.shields.io/badge/-tsyringe-3178c6?logo=typescript&logoColor=white) | Injeção de dependência leve |
| ![class-validator](https://img.shields.io/badge/-class--validator-3178c6?logo=typescript&logoColor=white) | Validação de DTOs |

---

## 📦 Como rodar o projeto localmente

**1. Instale as dependências**

```bash
yarn install
```

**2. Inicie localmente com Serverless Offline**

```bash
yarn dev
```
A aplicação estará acessível em: `http://localhost:3000`

---
## 🧪 Como rodar os testes

* Testes unitários e integração com Jest:
```bash
yarn test
```

* Para rodar apenas testes unitários ou integração:

```bash
yarn test:unit
```

```bash
yarn test:integration
```

* Para ver o coverage:

```bash
yarn test --coverage
```

---

## ☁️ Deploy com Serverless

### Pré-requisitos:

- Conta AWS válida
- AWS CLI configurado (`aws configure`)
- Permissões de IAM adequadas

### Deploy:

```bash
yarn deploy
```

Esse comando executa:

```bash
serverless deploy
```

A URL base será informada no terminal após o deploy.

### Dicas e boas práticas
* Gerenciar variáveis sensíveis: Use o AWS Secrets Manager ou SSM Parameter Store para armazenar senhas e tokens, e configure o serverless.yml para usar essas variáveis.
* Permissões IAM: Ajuste as permissões das funções Lambda para seguirem o princípio do menor privilégio.
* Stages: Use diferentes stages (dev, prod, test) no Serverless para ambientes isolados:

```bash
serverless deploy --stage prod
```
Logs: Monitore seus logs com:

```bash
serverless logs -f createAppointment --stage dev
```

Rollback: Caso precise voltar para uma versão anterior:

```bash
serverless rollback --timestamp <timestamp> --stage dev
```
---

## 🌍 Endpoints da API

### 📅 GET `/agenda`

Retorna todos os médicos e horários disponíveis.

#### ✅ CURL:
```bash
curl -X GET http://localhost:3000/dev/agenda
```

---

### 📝 POST `/agendamento`

Realiza o agendamento de uma consulta.

#### 🔸 Corpo da Requisição:
```json
{
  "agendamento": {
    "medico": "Dr. João Silva",
    "paciente": "Carlos Almeida",
    "data_horario": "2024-10-05 09:00"
  }
}
```

#### ✅ CURL:
```bash
curl -X POST http://localhost:3000/dev/agendamento   -H "Content-Type: application/json"   -d '{
    "agendamento": {
      "medico": "Dr. João Silva",
      "paciente": "Carlos Almeida",
      "data_horario": "2024-10-05 09:00"
    }
  }'
```

---

## 🏗️ Arquitetura e Estrutura do Projeto
Padrão Arquitetural Utilizado
Este projeto segue uma arquitetura modular e clean architecture (arquitetura limpa), priorizando:

Separação de responsabilidades: Cada camada tem funções bem definidas (controller, service, dto, interface, utils).

Injeção de dependências: Utilização do container tsyringe para desacoplar as dependências e facilitar testes.

DTOs (Data Transfer Objects): Para validação e transformação dos dados de entrada e saída, garantindo contratos claros.

Testabilidade: Com testes unitários e de integração escritos para garantir confiabilidade do código.

### 📁 Estrutura do projeto
``` plaintext
src/
 ├─ agenda/                      # Módulo para Listagem de Agendas (GET)
 │   ├─ controller/              # Handlers das rotas
 │   ├─ interface/               # Interfaces dos serviços
 │   ├─ mocks/                   # Dados mockados para testes
 │   ├─ service/                 # Lógica de negócio (services)
 │   └─ dto/                    # Objetos de transferência de dados (se necessário)
 │
 ├─ agendamento/                 # Módulo para criação de agendamento (POST)
 │   ├─ controller/              # Handlers da rota de agendamento
 │   ├─ dto/                     # DTOs de validação e transformação
 │   ├─ interface/               # Interface do serviço de agendamento
 │   ├─ service/                 # Lógica do agendamento (serviço)
 │
 ├─ core/                       # Infraestrutura comum
 │   ├─ container.ts            # Configuração do container de injeção
 │   ├─ types.ts                # Tipos e constantes globais
 │
 ├─ utils/                      # Funções utilitárias (validação, resposta HTTP, etc)
 │
 └─ __tests__/                  # Testes unitários e integração 
```
### Fluxo da Aplicação
O handler recebe a requisição HTTP (exemplo: POST /agendamento).

Valida e transforma os dados recebidos usando os DTOs e o class-validator.

O controller injeta e chama o service que contém a regra de negócio.

O service executa a lógica, neste caso simula a criação do agendamento e retorna resultado.

O handler retorna a resposta formatada ao cliente.

## 🙌 Autor

Desenvolvido por **Maycon Leite**  
📧 leite.maycon@live.com  
💼 [LinkedIn](https://www.linkedin.com/in/maycon-leite/)
