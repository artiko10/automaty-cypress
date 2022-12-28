class InputPage {

    elements = {
        inputName : () => cy.get('#formBasicEmail'),
        inputToCopy : () => cy.get(':nth-child(3) > .form-control'),
        inputPasword : () => cy.get('#formBasicPassword'),
        inputDisabled : () => cy.get(':nth-child(7) > .form-control')
    }

    EnterNameAndPressTab(Name) {
       this.elements.inputName().type(Name).invoke("prop", "value").then(imie => {
            expect(imie).to.contain(Name)
          })
          cy.tab()
    }

    VerifyTextFromInput() {
       this.elements.inputToCopy().invoke("prop", "value").then(wartosc => {
            cy.log("Skopiowana wartość: " + wartosc)
            expect(wartosc).to.contain("football")
          })
    }

    EnterPasswordAndClearIt(password) {
        this.elements.inputPasword().type(password).clear().invoke("prop", "value").then(clearpass => {
            expect(clearpass).to.contain("")
          })
    }

    VerifyInputisDisabled() {
        this.elements.inputDisabled().should('be.disabled')
    }

}
export default new InputPage();