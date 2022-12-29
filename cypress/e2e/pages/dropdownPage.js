class dropdownPage {

    elements = { 
        SelectOption : () =>  cy.get('select'),
        ExpandDropdown : () => cy.get('#dropdown-menu-align-right'),
        Option4 : () => cy.get('.dropdown-menu > :nth-child(4)'),
        textSelected : () => cy.get('.mt-4'),
        DropdownName : () => cy.get('.inputDropdown'),
        textName : () => cy.get('.main > .text-light')
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

    SearchName() {
        this.elements.DropdownName().type('Anna')
        this.elements.textName().should("contain", "Anna")
    }
}
export default new dropdownPage();