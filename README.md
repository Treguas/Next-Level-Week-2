# Next-Level-Week-2


<!-- Badges session -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/K-Schaeffer/NLW-2?color=%2304D361">

  
  

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
</p>

<!--Banner session-->
<h1 align="center">
    <img alt="Proffy-Banner" title="Proffy" src=""/>
</h1>

<!-- Index session-->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-preview">Preview</a> • 
 <a href="#-como-executar-o-projeto">Executando</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-licença">Licença</a>
</p>

<!--About session-->
## 💻 Sobre o projeto

Projeto desenvolvido durante a **NLW #2- Next Level Week 2** oferecida pela [Rocketseat].
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

👨‍🏫 Proffy - O projeto surgiu com a missão de trazer uma homenagem aos educadores do Brasil, através de uma plataforma que conecta alunos e professores de diversas matérias.  Todo o desenvolvimento foi feito na semana do dia nacional dos profissionais de educação. 
<br>A mim este projeto teve o caráter fundamental de reforçar as bases do desenvolvimento front-end, principalmente com HTML e CSS.

---

<!--Functionalities session-->
## ⚙️ Funcionalidades

- [x] Professores podem se cadastrar na plataforma através de um formulário no qual preenchem seus dados:
  - [x] nome completo
  - [x] link de uma foto
  - [x] número de whatsapp
  - [x] breve biografia
  - [x] matéria que será lecionada
  - [x] custo hora/aula
  - [x] horários disponíveis

- [x] Alunos podem buscar professores e:
  - [x] filtrar por matéria, dia da semana e horário
  - [x] entrar em contato diretamente no whatsapp de determinado professor
  
---


<!--Preview session-->
## 📺 Preview

<p align="center">
<img alt="Preview" src="" width="800px">
</p>

---

<!--Running session-->
## 🚀 Como executar o projeto

Este projeto consiste em três partes:
1. [Frontend](/src/views/pages) 
2. [Backend](/src/server.js) 
3. [Database](/src/database) 

<!--💡Obs-->

### Pré-requisitos

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)

#### 🎲 Rodando o projeto

```bash

# Clone o repositório
$ git clone https://github.com/K-Schaeffer/NLW-2.git

# Acesse a pasta do projeto no prompt de comando
$ cd NLW-2

# Instale as dependências
$ npm install

# Execute o script "dev"
$ npm run dev

# O projeto inciará na porta: 3000 - acesse http://localhost:3000 

```

Opcionalmente, você pode desejar ter uma base de dados limpa, para isso:

```bash

# Delete o arquivo database.sqlite
$ rm -r src/database/database.sqlite

# Execute o arquivo para criação das tabelas
$ node src/database/db.js

```

Feito isso, basta executar o procedimento de rodar o projeto, cadastrar professores, e buscá-los ;)

---

<!--Tecnologies session-->
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end**  ([HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  +  [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) + [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript))

#### **Back-end**  ([NodeJS](https://nodejs.org/en/))

-   **[Express](https://expressjs.com/)**
-   **[Nunjucks](https://mozilla.github.io/nunjucks/)**
-   **[Nodemon](https://nodemon.io)**

> Veja o arquivo [package.json](./package.json)

#### **Database**  ([Sqlite-Async](https://www.npmjs.com/package/sqlite-async))


<!--License session-->
## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

