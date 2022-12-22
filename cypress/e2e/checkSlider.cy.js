describe('check Slider', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Change range to 20', () => {
        cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-7 > div > div.MuiBox-root.css-1v5z18m > span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeSmall.css-53tbrc-MuiSlider-root > span.MuiSlider-track.css-1n40zqk-MuiSlider-track').invoke("attr", "style", "width: 20%");
        cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb').invoke("attr", "style", "left: 20%");
        cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb').invoke("attr", "style", "left: 20%").click()
 });

       it('Set volume to 80%', () => {
        cy.get('.css-1qx01vb-MuiStack-root > .MuiSlider-root > .MuiSlider-thumb').last()
         .invoke("attr", "style", "left: 80%")
        .invoke("attr", "aria-valuenow", "80");

        cy.get('.css-1qx01vb-MuiStack-root > .MuiSlider-root > .MuiSlider-track')
        .invoke("attr", "style", "left: 0%; width: 80%;");

         });

         it('Check if this slider is disabled', () => {
         cy.get('#disabledRange').should('be.disabled')
        });
  });