describe('check dropdown', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/dropdown"]').click()
      })
    
      it('choose one of the products and print all the options', () => {
        cy.get('#dropdown-menu-align-right').click()
        cy.get('.dropdown > .dropdown-menu > :nth-child(4)').click()
      
      
      })

    })