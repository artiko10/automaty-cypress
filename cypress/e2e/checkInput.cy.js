import inputPage from "./pages/inputPage";


describe('check input', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/input"]').click()
      })
    
      it('Enter your name and press TAB', () => {
        inputPage.EnterNameAndPressTab("Tadeusz")
       
      })

      it('Copy the text from input', () => {
       inputPage.VerifyTextFromInput()
      })

      it('Enter the password and clear it', () => {
       inputPage.EnterPasswordAndClearIt('qwerty123')
      })

      it('Check if the field is disabled', () => {
       inputPage.VerifyInputisDisabled()
        })
      })
