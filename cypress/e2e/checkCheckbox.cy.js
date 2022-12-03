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
   
        cy.get('[data-cy="Option1Checkbox"]').invoke("prop", "checked").then(option1 => {
          cy.log(option1)
          expect(option1).to.be.true

        })
        cy.get('[data-cy="Chekboxs task 2"] > :nth-child(2)').invoke("prop", "checked").then(option2 => {
            cy.log(option2)
        })
        
      })

      it('Find the bug', () => {
   
        cy.get('[data-cy="YesCheckbox"]').check().invoke("prop", "checked").then(yes => {
          cy.log(yes)
         })
         cy.get('[data-cy="NoCheckbox"]').check().invoke("prop", "checked").then(no => {
          cy.log(no)
          })
      
      })

      it('Confirm last field is disabled', () => {
        cy.get('[data-cy="CheckboxOne"]').check()
        cy.get('[data-cy="CheckboxTwo"]').check()
        cy.get('[data-cy="CheckboxThree"]').should('be.disabled')
       
      })

      it('Confirm that all options are selected', () => {
        cy.get('[data-cy="Chekboxs task 5"]').find("input").check();
        cy.get('[data-cy="Chekboxs task 5"]').find("input").should('be.checked');
        cy.get('[data-cy="Chekboxs task 5"] > :nth-child(1) > .form-check-input').uncheck();
        cy.get('[data-cy="Chekboxs task 5"]').find("input").should('not.be.checked');
        cy.get('[data-cy="Chekboxs task 5"] > :nth-child(1) > .form-check-input').check();
        cy.get('[data-cy="Chekboxs task 5"]').find("input").should('be.checked');
      })
})