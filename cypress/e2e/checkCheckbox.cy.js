import checkboxPage from "./pages/checkboxPage";

describe('check checkbox', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/checkbox"]').click()
      })
    
      it('check if only one radio button is selected', () => {
        checkboxPage.BlackCheckBoxIsSelected()
        checkboxPage.WhiteCheckBoxIsSelected()
      })

      it('find which chebox is selected', () => {
         checkboxPage.findCheckboxSelected()
      })

      it('Find the bug', () => {  
        checkboxPage.VerifyCheckboxesAreChecked()   
      })

      it('Confirm last field is disabled', () => {
        checkboxPage.VerifyDisabledCheckbox()  
      })

      it('Confirm that all options are selected', () => {
       checkboxPage.VerifyAllOptionSelected()
      })
})