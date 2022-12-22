describe('check Upload', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/slider"]').click()
      })
    
      it('Upload file', () => {
        cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-7 > div > div.MuiBox-root.css-1v5z18m > span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeSmall.css-53tbrc-MuiSlider-root > span.MuiSlider-track.css-1n40zqk-MuiSlider-track').invoke("attr", "style", "width: 20%");
        cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb').invoke("attr", "style", "left: 20%");
        cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb').invoke("attr", "style", "left: 20%").click()
      

       

      });

    });