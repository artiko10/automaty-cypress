describe('check dropdown', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/dropdown"]').click()
      })
    
      it('select all option and get text', () => {
        cy.get('select').then(select => {
          cy.wrap(select).find("option").each(opcja => {
            cy.wrap(select).select(opcja.text())
          })
        })
      })

      it('search for opction 1 and select', () => {
        // cy.get('.css-6j8wv5-Input').click()
        // cy.get('#react-select-3-listbox').type('{downarrow}').type('{enter}')
      })

      it('chose one of the product', () => {
        cy.get('#dropdown-menu-align-right').click()
        cy.get('.dropdown-menu > :nth-child(4)').click()
        cy.get('.text-warning').should("contain", "You selected: potato")
      })
    })