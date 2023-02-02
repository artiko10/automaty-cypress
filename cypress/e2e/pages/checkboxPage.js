class checkboxPage {
    elements ={
        checboxBlack : () => cy.get('[data-cy="BlackCheckbox"]'),
        checkboxWhite: () => cy.get('[data-cy="WhiteCheckbox"]'),
        checkboxOption1: () => cy.get('[data-cy="Option1Checkbox"]'),
        checkboxsTwoOptions: () => cy.get('[data-cy="Chekboxs task 2"] > :nth-child(2)'),
        checkboxYes: () => cy.get('[data-cy="YesCheckbox"]'),
        checkboxNo: () => cy.get('[data-cy="NoCheckbox"]'),
        checkboxOne: () => cy.get('[data-cy="CheckboxOne"]'),
        checkboxTwo: () => cy.get('[data-cy="CheckboxTwo"]'),
        checkboxThree: () => cy.get('[data-cy="CheckboxThree"]'),
        AllCheckboxTask5: () => cy.get('[data-cy="Chekboxs task 5"]'),
        SelectAllCheckbox: () => cy.get('[data-cy="Chekboxs task 5"] > :nth-child(1) > .form-check-input')
    }

    BlackCheckBoxIsSelected() {
        this.elements.checboxBlack().check()
        this.elements.checboxBlack().should('be.checked');
        this.elements.checkboxWhite().should('not.be.checked');
     }

     WhiteCheckBoxIsSelected() {
        this.elements.checkboxWhite().check()
        this.elements.checkboxWhite().should('be.checked');
        this.elements.checboxBlack().should('not.be.checked');
     }

     findCheckboxSelected() {
        this.elements.checkboxOption1().invoke("prop", "checked").then(option1 => {
            cy.log(option1)
            expect(option1).to.be.true
        })

        this.elements.checkboxsTwoOptions().invoke("prop", "checked").then(option2 => {
            cy.log(option2)
        })
     }

     VerifyCheckboxesAreChecked() {
        this.elements.checkboxYes().check().invoke("prop", "checked").then(yes => {
            cy.log(yes)
           })
           this.elements.checkboxNo().check().invoke("prop", "checked").then(no => {
            cy.log(no)
            })
     }

     VerifyDisabledCheckbox() {
       this.elements.checkboxOne().check()
       this.elements.checkboxTwo().check()
       this.elements.checkboxThree().should('be.disabled')
     }

     VerifyAllOptionSelected() {
        this.elements.AllCheckboxTask5().find("input").check();
        this.elements.AllCheckboxTask5().find("input").should('be.checked');
        this.elements.SelectAllCheckbox().uncheck();
        this.elements.AllCheckboxTask5().find("input").should('not.be.checked');
        this.elements.SelectAllCheckbox().check();
        this.elements.AllCheckboxTask5().find("input").should('be.checked');
     }

}
export default new checkboxPage();