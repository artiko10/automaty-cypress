describe('check calendar', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.get('[href="/table"]').click()
      })
    
      it('Select range from your birthday to chrismas using dropdowns', () => {
        cy.get('.rdrMonthPicker > select').select('April')
        cy.get('.rdrYearPicker > select').select('1999')
        cy.get(':nth-child(15) > .rdrDayNumber').click()
        cy.get('.rdrMonthPicker > select').select('December')
        cy.get('.rdrYearPicker > select').select('2022')
        cy.get(':nth-child(28) > .rdrDayNumber').click()
        cy.get('.rdrDateDisplayItemActive > input').invoke("prop", "value").then(dateTo => {
          expect(dateTo).to.contain("Apr 11, 1999")
        })

      })

      it('Write incorrect date', () => {
        cy.get('.rdrDateDisplayItemActive > input').clear().type('incorrect date')
        cy.tab()
        cy.get('.rdrWarning').should('be.visible')

      })

      it('Search using each function', () => {
        cy.get('.rdrDays')
        .each(function($el, index, $list){
          console.log($el, index, $list)
        })

    })

  })