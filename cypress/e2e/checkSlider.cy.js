describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Upload file', () => {
        cy.get('.p-5 > div > input').invoke("val", "70").trigger("change");
        cy.get('.p-5 > div > :nth-child(2)').should("have.text", 70);

       

      });

    });