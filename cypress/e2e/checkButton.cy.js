import buttonPage from "./pages/buttonPage";

describe('check buttons', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    buttonPage.clickNavButton()
  })

  it('check popup', () => {
    buttonPage.clickOnBtnOpenPopup();
    buttonPage.elements.textOnPopup().should("contain", "Example popup");
    buttonPage.clickOnBtnConfirmPopup();
  })

  it('check tooltip', () => {
    buttonPage.hoverOnTooltipBtn();
    buttonPage.elements.textOnTooltip().should("contain", "This is tooltip")
  })

  it('check color button', () => {
    buttonPage.checkColorBtn();
    buttonPage.elements.btnCheckColor().should('have.css', 'background-color', 'rgb(13, 110, 253)')
  })

  it('check button is disabled', () => {
    buttonPage.elements.btnDisabled().should('be.disabled')
  })

  it('click go to home and check url', () => {
    buttonPage.clickOnButtonGoToHome()
    cy.url().should('eq', 'http://localhost:3000/' )
    buttonPage.clickNavButton()
  })

  it('click button and check message', () => {
   buttonPage.clickMessageButton()
    buttonPage.elements.textMessage().should('have.text', 'Congratulations, you have successfully clicked the button!')
  })

  it('change color of the button', () => {
   buttonPage.changeColorButton()
      buttonPage.elements.btnChangeColor().should('have.css', 'background-color', 'rgb(23, 7, 248)')  
  })
})