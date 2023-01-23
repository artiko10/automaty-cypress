class sliderPage {

    elements = {
        SliderRange : () => cy.get('.css-1v5z18m > .MuiSlider-root'),
        SliderRangeDot : () => cy.get('.MuiSlider-sizeSmall > .MuiSlider-thumb'),
        SliderVolumeDot : () => cy.get('.css-e53awj-MuiStack-root > .MuiSlider-root > .MuiSlider-thumb'),
        LineSlider : () => cy.get('.css-e53awj-MuiStack-root > .MuiSlider-root > .MuiSlider-track'),
        DisabledSlider : () => cy.get('#disabledRange')
    }

    ChangeRangeToValue() {
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