describe('check table', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/table"]').click()
      })
    
      it('Sorting table', () => {
        cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-8 > div > div > table > tbody > tr:nth-child(1)').should('have.length', 1)
        

      })

    })