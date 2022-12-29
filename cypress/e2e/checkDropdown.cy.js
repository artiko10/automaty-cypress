import dropdownPage from "./pages/dropdownPage";

describe('check dropdown', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/dropdown"]').click()
      })
    
      it('select all option and get text', () => {
        dropdownPage.SelectAllOption()
      })

      it('search name and select', () => {
       dropdownPage.SearchName()
      })

      it('chose one of the product', () => {
       dropdownPage.ChooseOneProduct()
      })
    })