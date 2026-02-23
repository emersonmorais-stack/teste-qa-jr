#TESTE QA

Para a automação da interface, acabei optando por utilizar o **Cypress**. 

**O desafio do E-mail Único:**

Na parte dois do desafio, utilzei a função nativa do javascript `Date.now()` para garantir que o teste rode várias vezes e não quebre por conta de algum e-mail já cadastrado na plataforma, por conta disso não foi necessário o uso de biblioteca.


Teste bônus API

a sugestão era utilizar o postman para testar a roda de produtos, mas optei por testar no proprio ambiente do cypress criando um script para fazer essa requisição validando o retorno 200 da requisição.


---

 como rodar o projeto na sua máquina

 precisa ter o [Node.js](https://nodejs.org/) e o Git instalados no computador.
 nvm install --lts

 
1. Faça o clone deste repositório para a sua máquina:
   ```bash
   git clone [https://github.com/emersonmorais-stack/teste-qa-jr.git]

Pelo terminal, entre na pasta do projeto e instale as depedências. Isso vará com que o crypress fique configurado automaticamente. 

npm install
Para ver o robô trabalhando (Modo Visual): Se quiserem acompanhar o navegador abrindo e preenchendo os dados, basta rodar o comando abaixo e selecionar o teste E2E na janela gráfica que vai se abrir:


npx cypress open
Para rodar no modo silencioso (Headless): Se preferirem rodar tudo direto no terminal, simulando uma execução em esteira de CI/CD, é só usar o comando:

npx cypress run


Para facilitar a navegação de vocês pelo meu código, deixei a estrutura bem separadinha:

📄 Teste QA analista de testes Jr: Aqui na raiz do projeto, deixei a escrita dos cenários da Parte 1, utilizando a estrutura BDD (Dado - Quando - Então) para manter a linguagem clara e acessível para qualquer pessoa do time.

🤖 cypress/e2e/cadastro.cy.js: Este é o coração da automação. Aqui está o script que acessa o site, contorna a página inicial, gera o e-mail dinâmico, preenche o formulário e valida a mensagem de sucesso de cadastro.

🔌 cypress/e2e/api-produtos.cy.js: O meu script bônus! É ele quem faz o GET na rota /produtos da API do ServeRest e garante que a resposta está retornando com o status 200.
