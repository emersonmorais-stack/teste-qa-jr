describe('API ServeRest - Produtos', () => {
  it('Deve retornar uma lista de produtos com Status Code 200', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/produtos'
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})