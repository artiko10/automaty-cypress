import dropdownPage from "./pages/dropdownPage";

describe('check dropdown', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/dropdown"]').click()
      })
    
      it('select all option and get text', () => {
        dropdownPage.SelectAllOption()
      })

      it('search for opction 1 and select', () => {
        // cy.get('.css-6j8wv5-Input').click()
        // cy.get('#react-select-3-listbox').type('{downarrow}').type('{enter}')
      })

      it('chose one of the product', () => {
       dropdownPage.ChooseOneProduct()
      })
    })