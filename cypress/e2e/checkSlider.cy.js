describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Upload file', () => {
        cy.get('#SliderGrade').invoke("val", "70").trigger("change");
        cy.get('#SliderData').should("have.text", 70);

       

      });

    });