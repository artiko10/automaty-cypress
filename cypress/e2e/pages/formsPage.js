class FormsPage {

elements = {
    inputLastName : () => cy.get('#inputLastName'),
    inputFirstName : () => cy.get('#inputFirstName'),
    inputUsername : () => cy.get('#inputUsername'),
    inputCity : () => cy.get('#inputCity'),
    inputWeight : () => cy.get('#inputWeight'),
    inputHeight : () => cy.get('#inputHeight'),
    AgreeCheckbox : () => cy.get('.form-check-input'),
    btnSubmit : () => cy.get('.btn'),
    UserNameValidation : () => cy.get('.input-group > .invalid-feedback'),
    AgreeTermsValidation : () => cy.get('.form-check-label'),
    CityValidation : () => cy.get('.input-group > .invalid-feedback'),
}

TypeTextInFields(Name, LastName, userName, City, State, Zip) {
       this.elements.inputFirstName().type(Name)
       this.elements.inputLastName().type(LastName)
       this.elements.inputUsername().type(userName)
       this.elements.inputCity().type(City)
       this.elements.inputWeight().type(State)
       this.elements.inputHeight().type(Zip) 
}

AcceptAndSendForms() {
    this.elements.AgreeCheckbox().click()
    this.elements.btnSubmit().click()
}

SendForms() {
    this.elements.btnSubmit().click()
    this.elements.AgreeTermsValidation().should('have.text', 'Agree terms')
}

ClearTextInFields() {
    this.elements.inputFirstName().clear()
    this.elements.inputLastName().clear()
    this.elements.inputUsername().clear()
    this.elements.inputCity().clear()
    this.elements.inputWeight().clear()
    this.elements.inputHeight().clear()
   
}
}
export default new FormsPage();