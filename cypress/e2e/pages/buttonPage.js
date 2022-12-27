class buttonPage {

elements ={
    btnOpenPopup : () => cy.get('.btn-danger'),
    textOnPopup : () => cy.get('.modal-title'),
    btnConfirmPopup : () => cy.get('.modal-footer > .btn'),
    btnTooltip : () => cy.get('.p-5 > :nth-child(5)'),
    textOnTooltip : () => cy.get('.tooltip-inner'),
    btnCheckColor : () => cy.get('.btn-primary'),
    btnGoToHome : () => cy.get('[data-cy="HomeButton"]'),
    btnNavbar : () => cy.get('[href="/button"]'),
    btnChangeColor : () => cy.get('.toggle--button'),
    btnMessage : () => cy.get('[aria-controls="example-fade-text"]'),
    textMessage : () => cy.get('#example-fade-text'),
    btnDisabled : () => cy.get('#root > div > section > div:nth-child(1) > div > div.col-sm-7 > div > button.btn.btn-lg.btn-warning')

}   


clickOnBtnOpenPopup() {
   this.elements.btnOpenPopup().click()

}


clickOnBtnConfirmPopup() {
    this.elements.btnConfirmPopup().click()
  
}

hoverOnTooltipBtn() {
    this.elements.btnTooltip().trigger('mouseover')
    
}

checkColorBtn() {
    this.elements.btnCheckColor().invoke('css', 'background-color').then(color => {
        cy.log(color)
    })
}

clickOnButtonGoToHome() {
    this.elements.btnGoToHome().click()
}

clickNavButton() {
this.elements.btnNavbar().click()
}

changeColorButton() {
    this.elements.btnChangeColor().click()
    this.elements.btnChangeColor().invoke('css', 'background-color').then(changecolor => {
        cy.log(changecolor)
    })
}

clickMessageButton() {
    this.elements.btnMessage().click()
}

}

export default new buttonPage();