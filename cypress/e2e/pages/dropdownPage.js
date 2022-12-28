class dropdownPage {

    elements = { 
        SelectOption : () =>  cy.get('select'),
        ExpandDropdown : () => cy.get('#dropdown-menu-align-right'),
        Option4 : () => cy.get('.dropdown-menu > :nth-child(4)'),
        textSelected : () => cy.get('.text-warning')
    }

    SelectAllOption() {
        this.elements.SelectOption().then(select => {
            cy.wrap(select).find("option").each(opcja => {
              cy.wrap(select).select(opcja.text())
            })
          })
    }

    ChooseOneProduct() {
        this.elements.ExpandDropdown().click()
        this.elements.Option4().click()
        this.elements.textSelected().should("contain", "You selected: potato")
    }
}
export default new dropdownPage();