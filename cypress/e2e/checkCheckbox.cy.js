describe('check checkbox', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/checkbox"]').click()
      })
    
      it('check if only one radio button is selected', () => {
   
        cy.get('#reverse-radio-1').check()
        cy.get('#reverse-radio-1').should('be.checked');
        cy.get('#reverse-radio-2').should('not.be.checked');
        cy.get('#reverse-radio-2').check()
        cy.get('#reverse-radio-2').should('be.checked');
        cy.get('#reverse-radio-1').should('not.be.checked');
      
      })

      it('find which chebox is selected', () => {
   
        cy.get('.p-5 > :nth-child(5) > .form-check-input').invoke("prop", "checked").then(option1 => {
          cy.log(option1)
          expect(option1).to.be.true

        })
        cy.get('.p-5 > :nth-child(6) > .form-check-input').invoke("prop", "checked").then(option2 => {
            cy.log(option2)
        })
        
      })
})