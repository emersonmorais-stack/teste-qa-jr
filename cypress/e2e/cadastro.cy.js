Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
})

describe('Cadastro ServeRest', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Entrar na página inicial e evitar a tela branca
    cy.visit('https://front.serverest.dev/')

    // 2. Clica no link de ir fazero cadastro 
    cy.get('[data-testid="cadastrar"]').click()

    // 3. Preencher os dados do usuário
    const emailDinamico = `candidato${Date.now()}@qa.com`

    cy.get('[data-testid="nome"]', { timeout: 15000 }).type('Analista de Teste Jr')
    cy.get('[data-testid="email"]').type(emailDinamico)
    cy.get('[data-testid="password"]').type('senha123')
    
    // 4. Clica no botão de concluir cadastro
    cy.get('[data-testid="cadastrar"]').click()

    // 5. Valida a criação
    cy.get('.alert', { timeout: 15000 }).should('contain', 'Cadastro realizado com sucesso')
  })
})