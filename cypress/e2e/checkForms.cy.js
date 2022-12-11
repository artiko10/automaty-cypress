describe('check calendar', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/forms"]').click()
      })

      it('Positive path of the form', () => {
        cy.get('#validationCustom01').type('name')
        cy.get('#validationCustom02').type('last name')
        cy.get('#validationCustomUsername').type('username')
        cy.get('#validationCustom03').type('London')
        cy.get('#validationCustom04').type('test')
        cy.get('#validationCustom05').type('123123')
        cy.get('.form-check-input').click()
        cy.get('.btn').click()
       
      })

      it('Negative path of the form', () => {
       
        cy.get('.btn').click()
        cy.get('.input-group > .invalid-feedback').should('have.text', 'Please choose a username.')
        cy.get('.form-check-label').should('have.text', 'Agree to terms and conditions')
       
      })

    })