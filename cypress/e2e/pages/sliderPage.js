class sliderPage {

    elements = {
        SliderRange : () => cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-7 > div > div.MuiBox-root.css-1v5z18m > span.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-sizeSmall.css-53tbrc-MuiSlider-root > span.MuiSlider-track.css-1n40zqk-MuiSlider-track'),
        SliderRangeDot : () => cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb'),
        SliderVolumeDot : () => cy.get('.css-1qx01vb-MuiStack-root > .MuiSlider-root > .MuiSlider-thumb'),
        LineSlider : () => cy.get('.css-1qx01vb-MuiStack-root > .MuiSlider-root > .MuiSlider-track'),
        DisabledSlider : () => cy.get('#disabledRange')
    }

    ChangeRangeToValue() {
       this.elements.SliderRange().invoke("attr", "style", "width: 20%")
       this.elements.SliderRangeDot().invoke("attr", "style", "left: 20%")
       this.elements.SliderRangeDot().invoke("attr", "style", "left: 20%").click()
    }

    SetVolume() {
       this.elements.SliderVolumeDot().last()
        .invoke("attr", "style", "left: 80%")
       .invoke("attr", "aria-valuenow", "80");

       this.elements.LineSlider()
       .invoke("attr", "style", "left: 0%; width: 80%;");
    }

    VerifySliderIsDisabled() {
        this.elements.DisabledSlider().should('be.disabled')
        
    }
}
export default new sliderPage();