describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Upload file', () => {
        cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb').invoke("attr", "style", "left: 80%");
      

       

      });

    });