class FormsPage {

elements = {
    inputLastName : () => cy.get('#validationCustom02'),
    inputFirstName : () => cy.get('#validationCustom01'),
    inputUsername : () => cy.get('#validationCustomUsername'),
    inputCity : () => cy.get('#validationCustom03'),
    inputState : () => cy.get('#validationCustom04'),
    inputZip : () => cy.get('#validationCustom05'),
    AgreeCheckbox : () => cy.get('.form-check-input'),
    btnSubmit : () => cy.get('.btn'),
    UserNameValidation : () => cy.get('.input-group > .invalid-feedback'),
    AgreeTermsValidation : () => cy.get('.form-check-label'),
    CityValidation : () => cy.get('.col-md-6 > .invalid-feedback'),
}

TypeTextInFields(Name, LastName, userName, City, State, Zip) {
       this.elements.inputFirstName().type(Name)
       this.elements.inputLastName().type(LastName)
       this.elements.inputUsername().type(userName)
       this.elements.inputCity().type(City)
       this.elements.inputState().type(State)
       this.elements.inputZip().type(Zip) 
}

AcceptAndSendForms() {
    this.elements.AgreeCheckbox().click()
    this.elements.btnSubmit().click()
}

SendForms() {
    this.elements.btnSubmit().click()
    this.elements.AgreeTermsValidation().should('have.text', 'Agree to terms and conditions')
}

ClearTextInFields() {
    this.elements.inputFirstName().clear()
    this.elements.inputLastName().clear()
    this.elements.inputUsername().clear()
    this.elements.inputCity().clear()
    this.elements.inputState().clear()
    this.elements.inputZip().clear()
    this.elements.CityValidation().should('have.text', 'Please provide a valid city.')
}
}
export default new FormsPage();