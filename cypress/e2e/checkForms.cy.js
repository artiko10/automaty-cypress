import formsPage from "./pages/formsPage";

describe('check calendar', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/forms"]').click()
      })

      it('Submit form with all data', () => {
     formsPage.TypeTextInFields("Marcin", "Kowalski", "testUserName", "London", "testState", "123123")
     formsPage.AcceptAndSendForms()
      })

      it('Submit form with blank data', () => {
        formsPage.TypeTextInFields("test", "test", "test", "test", "test", "test")
        formsPage.ClearTextInFields()
        formsPage.AcceptAndSendForms()
        cy.get('.input-group > .invalid-feedback').should('have.text', 'Required field')
      })

      it('Submit form without accepting consent', () => {
        formsPage.TypeTextInFields("Marcin", "Kowalski", "testUserName", "London", "testState", "123123")
        formsPage.SendForms()
         })

    })